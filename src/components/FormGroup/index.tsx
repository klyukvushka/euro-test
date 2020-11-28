import React, { FC } from "react";
import styled from "styled-components";

export const Error = styled.div`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  font-weight: 500;
  padding-left: 5px;
  color: #ff0000;
  position: absolute;
  bottom: -25px;
`;

const FormGroupStyled = styled.div<{ error?: string; required?: boolean }>`
  margin-bottom: 35px;
  position: relative;
`;

interface Props {
  error?: any;
  style?: object;
}

export const FormGroup: FC<Props> = ({ children, error, style }) => {
  return (
    <FormGroupStyled error={error} className="form-group" style={style}>
      {children}
      {error && <Error className="error">{error}</Error>}
    </FormGroupStyled>
  );
};
