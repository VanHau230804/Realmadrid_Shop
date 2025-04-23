import React from 'react';
import PosterAuth from './components/PosterAuth';

const RegisterPage = ({
  onClose,
  switchToLogin
}: {
  onClose: () => void;
  switchToLogin: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center fixed inset-0 z-[101] cursor-pointer ">
      <div className="w-[40%] flex border shadow-md rounded-2xl bg-gray-200 relative">
        <PosterAuth />
        <div className="w-[55%] p-8  bg-white rounded-r-2xl">
          <button
            className="absolute top-4 right-4 text-red-600"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Create an Account
          </h2>
          <form className="">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Sign Up
            </button>
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
