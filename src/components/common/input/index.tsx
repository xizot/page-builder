import React from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
  FieldPath,
} from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: FieldPath<FieldValues>;
  defaultValue?: string;
  rules?: UseControllerProps<FieldValues>["rules"];
  onChange?: (value: string) => void;
};

const Input = ({
  name,
  defaultValue,
  rules,
  onChange,
  ...rest
}: InputProps) => {
  const { field } = useController({
    name,
    rules,
    defaultValue,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <input
      {...field}
      {...rest}
      onChange={handleInputChange}
      className={`h-[40px] px-4 border rounded-md ${rest.className}`}
    />
  );
};

export default Input;
