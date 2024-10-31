import React from 'react';
import Button, { ButtonProps } from './Button';

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  children,
  onClick = () => {},
  ...props
}) => {
  return (
    <Button
      {...props}
      className={`flex items-center space-x-2 bg-white hover:rounded-lg hover:shadow-md hover:bg-slate-200`}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </Button>
  );
};

export default IconButton;
