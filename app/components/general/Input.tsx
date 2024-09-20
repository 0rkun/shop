"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  disabled?: boolean;
  type: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  disabled,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <input
      className={`
        h-12 w-full   p-3 rounded-md outline-none my-3
        ${errors[id] ? "border border-red-500" : "border border-slate-800"}`}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      {...register(id, { required })}
    />
  );
};

export default Input;
