import React from 'react';
interface LabelProps {
  htmlFor?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function Label({
  htmlFor,
  className,
  children,
  onClick,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </label>
  );
}
