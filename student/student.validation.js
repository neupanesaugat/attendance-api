import Yup from 'yup';

export const addStudentValidationSchema = Yup.object({
  name: Yup.string().required().trim().max(50),
  contact: Yup.number().required(),
  address: Yup.string().required().trim().max(50),
});
