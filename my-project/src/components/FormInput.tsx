import React, { ChangeEvent } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export interface FormInputProps {
  label: string;
  type: string;
  value: string;
  required: boolean;
  datatestid: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

// reusable form component
export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  value,
  onChange,
  required,
  datatestid,
  placeholder,
}) => (
  <FormControl mb={4} isRequired={required}>
    <FormLabel htmlFor={datatestid}>{label}</FormLabel>
    <Input
      id={datatestid}
      data-testid={datatestid}
      type={type}
      value={value}
      onChange={onChange}
      variant="outline"
      placeholder={placeholder}
    />
  </FormControl>
);
