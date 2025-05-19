import { emailRegex, passwordRegex } from '../../constants/regex';
import * as yup from 'yup';
const schema = yup.object({
  email: yup
    .string()
    .trim()
    .required('This field is mandatory!')
    .matches(emailRegex, { message: 'The email format is incorrect!' }),
  password: yup
    .string()
    .trim()
    .required('Password cannot be empty!')
    .min(8, 'Password must be at least 8 characters long!')
    .matches(passwordRegex, {
      message: 'Password must contain at least 1 letter.'
    })
});
export default schema;
