import { emailRegex, passwordRegex } from '../../constants/regex';
import * as yup from 'yup';
const schema = yup.object({
  username: yup.string().trim().required('Vui lòng nhập vào họ và tên !'),
  email: yup
    .string()
    .trim()
    .required('Trường này là bắt buộc !')
    .matches(emailRegex, { message: 'Email không dúng định dạng !' }),
  password: yup
    .string()
    .trim()
    .required('Mật khẩu không được để trống !')
    .min(8, 'Mật khẩu ít nhất 8 ký tự trở lên !')
    .matches(passwordRegex, {
      message: 'Mật khẩu ít nhất 1 chữ cái'
    }),
  password_confirm: yup
    .string()
    .trim()
    .oneOf(
      [yup.ref('password'), undefined],
      'Mật khẩu xác nhận phải khớp với mật khẩu đã nhập !'
    )
});
export default schema;
