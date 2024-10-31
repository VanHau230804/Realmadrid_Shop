import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="relative flex items-center w-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5 text-gray-500 absolute left-3"
      >
        <path
          d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M22 22L18 18"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="Search"
        className={`pl-11 pr-4 py-2 w-[85%] h-[48px] rounded-2xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 `}
      />
    </div>
  );
};

export default Input;
