import { ReactNode } from 'react';
type TypeButton = 'button' | 'submit';

type IButton = {
  type: TypeButton;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
};

const Button = ({
  type = 'button',
  className = '',
  onClick = () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isLoading = false,
  disabled = false,
  children,
  ...props
}: IButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 font-semibold transition-all duration-200 ${className} ${
        disabled && 'opacity-50 pointer-events-none'
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
