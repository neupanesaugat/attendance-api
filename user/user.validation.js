import Yup from 'yup';

export const userValidationSchema = Yup.object({
  email: Yup.string().required().lowercase().trim().max(55).email(),
  password: Yup.string().required().trim(),
  firstName: Yup.string().required().trim().max(25),
  lastName: Yup.string().required().trim().max(25),
  gender: Yup.string().required().oneOf(['male', 'female', 'other']),
  role: Yup.string().required().oneOf(['admin', 'teacher']),
});

export const loginUserValidationSchema = Yup.object({
  email: Yup.string().required().lowercase().trim().max(55).email(),
  password: Yup.string().required().trim(),
});
