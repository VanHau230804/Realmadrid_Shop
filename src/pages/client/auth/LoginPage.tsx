import React from 'react';
import PosterAuth from './components/PosterAuth';
import Lable from '../../../components/label/Label';
import Input from '../../../components/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import MessageForm from '../../../components/message';
import schema from '../../../components/yup/schemaAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import { IAccount } from '../../../types/user.type';
interface LoginPageProps {
  onClose: () => void;
  switchToRegister: () => void;
}
const LoginPage = ({ onClose, switchToRegister }: LoginPageProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const handleLogin: SubmitHandler<IAccount> = async data => {
    try {
      const { email, password } = data;
      console.log('Login data:', { email, password });
      // Call your login API here
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center fixed inset-0 z-[101] cursor-pointer ">
      <div className="w-[40%] flex border shadow-md rounded-2xl bg-gray-200 relative">
        <PosterAuth />
        <div className="w-[55%] p-8 space-y-6 bg-white rounded-r-2xl">
          <button
            className="absolute top-4 right-4 text-indigo-600 bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Member Sign In
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <Lable htmlFor="email">Email</Lable>
              <Input type="email" name="email" className="" control={control} />
              <MessageForm error={errors.email?.message} />
            </div>
            <div>
              <Lable htmlFor="password">Password</Lable>
              <Input
                type="password"
                name="password"
                className=""
                control={control}
              />
              <MessageForm error={errors.password?.message} />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Sign In
            </button>
            <div className="text-sm text-center">
              <a href="#" className="text-indigo-600 hover:text-indigo-">
                Forget username / password?
              </a>
            </div>
          </form>
          <div className="text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={switchToRegister}
              className="text-indigo-600 hover:text-indigo-"
            >
              Sign up here...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
