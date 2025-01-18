import express from 'express';
import validationReqBody from '../middleware/validate.req.body.js';
import User from './user.model.js';
import {
  loginUserValidationSchema,
  userValidationSchema,
} from './user.validation.js';

const router = express.Router();

//* register user
router.post(
  '/user/register',
  //? validate user
  validationReqBody(userValidationSchema),

  //? register new user
  async (req, res) => {
    //extract data from req.body
    const newUser = req.body;

    //find the user with email
    const user = await User.findOne({ email: newUser.email });

    // if user exist, throw error
    if (user) {
      return res.status(400).send({ message: 'User already exist' });
    }

    // send to DB
    await User.create(newUser);
    //send res
    return res
      .status(200)
      .send({ message: 'User Registered Successfully', userDetails: newUser });
  }
);

//* login user
router.post(
  '/user/login',

  validationReqBody(loginUserValidationSchema),
  async (req, res) => {
    //extract loginCredentials from req.body
    const loginCredentials = req.body;

    // find user using email
    const user = await User.findOne({ email: loginCredentials.email });

    //if not user, throw error
    if (!user) {
      return res.status(404).send({ message: 'Invalid Credentials' });
    }

    //compare password
    const password = await User.findOne({
      password: loginCredentials.password,
    });
    if (!password) {
      return res.status(408).send({ message: 'Invalid Credentials' });
    }

    // send res
    return res
      .status(200)
      .send({ message: 'Login successful !', userDetail: user });
  }
);

export default router;
