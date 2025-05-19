/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { FC } from 'react';
import {
  useController,
  FieldValues,
  UseControllerProps
} from 'react-hook-form';

interface IInput extends UseControllerProps<FieldValues> {
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
  isGlass?: boolean;
  disabled?: boolean;
  colorGlass?: string;
  control?: any; // Vẫn giữ any để tương thích ngược
}

const Input: FC<IInput> = ({
  name,
  type = 'text',
  className = '',
  isGlass = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  colorGlass = 'text-primary',
  control,
  ...props
}) => {
  if (!control || !name) {
    console.error(
      'Input component requires both control and name props when used with react-hook-form'
    );
    return (
      <input
        id={name}
        type={type}
        className={`w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
          isGlass ? 'pl-[50px] pr-5' : 'px-5'
        } ${className}`}
        {...props}
      />
    );
  }

  const { field } = useController({
    control,
    name,
    defaultValue: ''
  });

  return (
    <input
      {...field}
      id={name}
      type={type}
      className={`w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
        isGlass ? 'pl-[50px] pr-5' : 'px-5'
      } ${className}`}
      {...props}
    />
  );
};

export default Input;
