import React from "react";
import { styled } from "../../config/theme";
import { Field, FieldProps } from "formik";
import { InputStyled, Label } from "../styled";
import { media } from "../../config/media";

interface Props {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  name: string;
  value?: string | number;
  label?: string;
}

const TextAreaComponent: React.FC<Props> = ({
  className,
  placeholder,
  disabled,
  value,
  name,
  label,
}) => {
  return (
    <div className={className}>
      <Field name={name}>
        {({ field }: FieldProps) => {
          return (
            <>
              <Label htmlFor={name} className="label">
                {label}
              </Label>
              <textarea
                id={name}
                className="textarea"
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

export const TextArea = styled(TextAreaComponent)`
  .textarea {
    ${InputStyled};
    resize: none;
    height: 116px;
    width: 540px;
    padding: 13px 0;
    ${media.phone`
      width: 100%
  `}
  }
`;
