import React from "react";
import { styled } from "../../../config/theme";
import { Field, FieldProps } from "formik";
import { InputStyled } from "../../styled";
import { Label } from "../Label";

interface Props {
  className?: string;
  disabled?: boolean;
  type: string;
  placeholder?: string;
  name: string;
  value?: string;
  label?: string;
}

const InputComponent: React.FC<Props> = ({
  className,
  placeholder,
  type = "text",
  name,
  disabled,
  value,
  label,
}) => {
  return (
    <div className={className}>
      <Field name={name}>
        {({ field }: FieldProps) => {
          return (
            <>
              <Label htmlFor={name}>{label} </Label>
              <input
                id={name}
                type={type}
                className="input"
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                value={value}
              />
            </>
          );
        }}
      </Field>
    </div>
  );
};

export const Input = styled(InputComponent)`
  .input {
    ${InputStyled}
  }
`;
