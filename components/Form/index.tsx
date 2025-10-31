"use client";

import React, { FC, ButtonHTMLAttributes, ReactElement } from "react";
import { useFormContext, FieldPath, FieldValues } from "react-hook-form";
import { MapPin, Check, Calendar, Clock } from "lucide-react";

type TFormValues = FieldValues;

export interface RHFInputProps<T extends TFormValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: FieldPath<T>;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

export const InputRHF = <T extends TFormValues>({
  id,
  label,
  defaultValue,
  type = "text",
  required,
  placeholder,
  ...props
}: RHFInputProps<T>): ReactElement => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();
  const error = (errors as any)[id]?.message as string;

  return (
    <div className="mb-6 relative">
      <label
        htmlFor={id as string}
        className="block mb-1 text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {label}
      </label>
      <input
        id={id as string}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        {...register(id)}
        {...props}
        className={`w-full p-3 border rounded-xl transition duration-150 text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-500 focus:border-gray-500 ${
          error ? "border-red-500 ring-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export const SelectRHF = <T extends TFormValues>({
  id,
  label,
  options,
  defaultValue,
}: RHFInputProps<T> & { options: string[] }): ReactElement => {
  const { register } = useFormContext<T>();

  return (
    <div className="mb-6">
      <label
        htmlFor={id as string}
        className="block mb-1 text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id as string}
          defaultValue={defaultValue ?? ""}
          {...register(id)}
          className="w-full p-3 border border-gray-300 rounded-xl appearance-none bg-white text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-gray-500 transition duration-150"
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option: string) => (
            <option
              key={option}
              value={option.replace(/\s/g, "").toLowerCase()}
            >
              {option}
            </option>
          ))}
        </select>
        <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export const FormSectionHeader: FC<{ number: number; title: string }> = ({
  number,
  title,
}) => (
  <h4 className="text-2xl font-bold text-gray-800 mb-6 mt-10 border-b pb-3 border-gray-100">
    <span className="text-gray-600 mr-2">{number}.</span>
    {title}
  </h4>
);

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ButtonBase: FC<BaseButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    type={props.type || "button"}
    className={`p-3 rounded-xl font-semibold transition duration-200 focus:outline-hidden ${className}`}
    {...props}
  >
    {children}
  </button>
);

export interface MethodButtonProps<T extends TFormValues> {
  icon: FC<{ className?: string }>;
  label: string;
  value: string;
  active: string;
  onChange: (id: FieldPath<T>, value: string) => void;
  id: FieldPath<T>;
}

export const MethodButtonRHF = <T extends TFormValues>({
  id,
  icon: Icon,
  label,
  value,
  active,
  onChange,
}: MethodButtonProps<T>): ReactElement => {
  const isActive = active === value;
  const activeClasses =
    "border-gray-500 bg-gray-100 text-gray-700 shadow-md ring-2 ring-gray-200";
  const inactiveClasses =
    "border-gray-300 bg-white text-gray-700 hover:border-gray-400 shadow-sm";

  return (
    <ButtonBase
      onClick={() => onChange(id, value)}
      className={`flex items-center justify-center border-2 w-full h-full ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </ButtonBase>
  );
};

export const FormSectionWrapper: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`p-4 bg-white rounded-xl shadow-sm ${className}`}>
    {children}
  </div>
);

export const ContactFieldGroup: FC<{
  children: React.ReactNode;
  isValid: boolean;
  iconType?: "check" | "calendar" | "clock";
}> = ({ children, isValid, iconType = "check" }) => {
  const Icon =
    iconType === "check" ? Check : iconType === "calendar" ? Calendar : Clock;

  return (
    <div className="relative">
      {children}
      {(isValid || iconType !== "check") && (
        <Icon
          className={`w-5 h-5 absolute right-4 top-[35px] sm:top-[38px] transition duration-300 ${
            iconType === "check"
              ? "text-gray-600"
              : "text-gray-500 pointer-events-none"
          }`}
        />
      )}
    </div>
  );
};

interface Props {
  children: any;

  condition: boolean;
}

const SwitchStatement: React.FC<Props> = ({ condition, children }) => {
  return condition ? children : null;
};

export default SwitchStatement;
