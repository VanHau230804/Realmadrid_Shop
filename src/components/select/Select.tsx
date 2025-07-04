/* eslint-disable @typescript-eslint/no-explicit-any */
import useToggle from '../../hooks/useToggle';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { ArrowDropDownIcon, ArrowDropUpIcon } from '../icons';

export interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  control: any;
  options: Option[];
  name: string;
  placeholder: string;
  disabled?: boolean;
  setIsDialogOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
  control,
  options,
  name,
  placeholder,
  disabled,
  setIsDialogOpen,
  className = ''
}) => {
  const { field } = useController({ name, control, defaultValue: '' });
  const { show, handleToggle } = useToggle();
  const selectedOption = options.find(option => option.value === field.value);

  const handleSelect = (value: string | number) => {
    field.onChange(value);
    handleToggle();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setIsDialogOpen && setIsDialogOpen(true);
  };

  return (
    <div className="relative">
      <div
        className={`h-10 min-w-[250px] px-4 bg-[#f3f4f7] flex items-center justify-between rounded-md ${
          disabled ? 'cursor-not-allowed select-none' : ' cursor-pointer'
        } ${className}`}
        onClick={() => !disabled && handleToggle()}
      >
        <span className="line-clamp-1">
          {selectedOption?.label || placeholder}
        </span>
        <span>{show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span>
      </div>

      {show && (
        <ul className="absolute mt-1 bg-white shadow-lg rounded-md w-full z-20 max-h-60 overflow-y-auto scroll-select">
          {options.length > 0 &&
            options.map(option => (
              <li
                key={option.value}
                className={`py-2 px-3 cursor-pointer hover:bg-gray-200/70 ${
                  field.value === option.value ? 'bg-gray-100/80' : ''
                }`}
                onClick={() => {
                  handleSelect(option.value);
                }}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
