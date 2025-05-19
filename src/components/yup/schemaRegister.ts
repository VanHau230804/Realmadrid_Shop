import { emailRegex, passwordRegex } from '../../constants/regex';
import * as yup from 'yup';
const schema = yup.object({
  username: yup
    .string()
    .trim()
    .required('Please enter your last name and first name!'),
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
    }),
  password_confirm: yup
    .string()
    .trim()
    .oneOf(
      [yup.ref('password'), undefined],
      'The confirmation password must match the entered password'
    )
});
export default schema;
