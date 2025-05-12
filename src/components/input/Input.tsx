/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { FC } from 'react';
import { useController } from 'react-hook-form';

interface IInput {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  name?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  isGlass?: boolean;
  disabled?: boolean;
  colorGlass?: string;
}

const Input: FC<IInput> = ({
  name = '',
  type = 'text',
  className = '',
  isGlass = false,
  colorGlass = 'text-primary',
  control,
  ...props
}) => {
  let fieldProps = {};
  if (control && name) {
    const controller = useController({ control, name, defaultValue: '' });
    fieldProps = controller.field;
  }

  return (
    <input
      {...fieldProps}
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
