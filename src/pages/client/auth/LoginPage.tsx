import React from "react";
import PosterAuth from "./components/PosterAuth";

const LoginPage = ({
  onClose,
  switchToRegister,
}: {
  onClose: () => void;
  switchToRegister: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center fixed inset-0 z-[101] cursor-pointer ">
      <div className="w-[40%] flex border shadow-md rounded-2xl bg-gray-200 relative">
        <PosterAuth />
        <div className="w-[55%] p-8 space-y-6 bg-white rounded-r-2xl">
          <button
            className="absolute top-4 right-4 text-red-600"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Member Sign In
          </h2>
          <form className="space-y-6">
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
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Sign In
            </button>
            <div className="text-sm text-center">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Forget username / password?
              </a>
            </div>
          </form>
          <div className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={switchToRegister}
              className="text-indigo-600 hover:text-indigo-500"
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
