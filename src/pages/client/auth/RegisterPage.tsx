import PosterAuth from './components/PosterAuth';
import Label from '../../../components/label/Label';
import Input from '../../../components/input/Input';
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
            className="absolute top-4 right-4 text-indigo-600 bg-white rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Create an Account
          </h2>
          <form className="">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                type="username"
                name="username"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                type="password"
                name="confirm-password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
