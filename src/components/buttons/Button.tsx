import React, { FC } from 'react';

export interface ButtonProps {
  type: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  children,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 font-semibold transition-all duration-200 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
