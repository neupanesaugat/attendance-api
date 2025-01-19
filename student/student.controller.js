import express from 'express';
import Student from './student.model.js';
import validationReqBody from '../middleware/validate.req.body.js';
import { addStudentValidationSchema } from './student.validation.js';
import User from '../user/user.model.js';

const router = express.Router();

//* add student
router.post(
  '/add',
  validationReqBody(addStudentValidationSchema),
  async (req, res) => {
    const user = await User.findOne({ role: 'admin' });
    const loggedInUserId = user._id;
    //extract newStudents from req.body
    const newStudent = req.body;
    newStudent.adminId = loggedInUserId;

    await Student.create(newStudent);
    return res.status(201).send({ message: 'Students added successfully!' });
  }
);

//* list all students
router.get('/list', async (req, res) => {
  const students = await Student.find();
  return res.status(200).send({ message: 'Success!', studentList: students });
});

export default router;
