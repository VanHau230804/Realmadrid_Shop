/* eslint-disable @typescript-eslint/no-unused-vars */
import PosterAuth from './components/PosterAuth';
import Label from '../../../components/label/Label';
import Input from '../../../components/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import MessageForm from '../../../components/message';
import schema from '../../../components/yup/schemaRegister';
import { yupResolver } from '@hookform/resolvers/yup';
import { IAccount } from '../../../types/account.type';
import { registerService } from '../../../services/auth.Service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/buttons/Button';
interface RegisterPageProps {
  onClose: () => void;
  switchToLogin: () => void;
}
const RegisterPage = ({ onClose, switchToLogin }: RegisterPageProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    control,
    reset
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  });
  const navigate = useNavigate();
  const handleRegister: SubmitHandler<IAccount> = async data => {
    if (!isValid) return;
    const { password_confirm, ...dataRegister } = data;
    const res = await registerService(dataRegister);
    if (res.status === 400) {
      toast.error(res.response.data.message, { position: 'top-right' });
    } else {
      console.log('response', res);
      toast.success(res.message, { position: 'top-right' });
      switchToLogin();
    }
    reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center fixed inset-0 z-[101] cursor-pointer ">
      <div className="w-[40%] flex border shadow-md rounded-2xl bg-gray-200 relative">
        <PosterAuth />
        <div className="w-[55%] p-8  bg-white rounded-r-2xl">
          <button
            className="absolute top-4 right-4 text-indigo-600 bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Create an Account
          </h2>
          <form className="" onSubmit={handleSubmit(handleRegister)}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                control={control}
              />
              <MessageForm error={errors.email?.message} />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                type="username"
                name="username"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                control={control}
              />
              <MessageForm error={errors.username?.message} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                name="password"
                control={control}
              />
              <MessageForm error={errors.password?.message} />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                type="password"
                name="password_confirm"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                control={control}
              />
              <MessageForm error={errors.password_confirm?.message} />
            </div>
            <Button
              type="submit"
              className="w-full px-4 py-2 mt-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </form>
          <div className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <button
              onClick={switchToLogin}
              className="text-indigo-600 hover:text-indigo-500"
            >
              Sign in here...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
