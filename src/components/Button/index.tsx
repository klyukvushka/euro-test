import React from "react";
import { styled } from "../../config/theme";

type Props = {
  className?: string;
  text: string;
  type: "submit" | "button";
};

const ButtonComponent: React.FC<Props> = ({ className, text, type }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

export const Button = styled(ButtonComponent)`
  padding: 19px 18px;
  background-color: ${(props) => props.theme.colors.blue};
  display: block;
  text-align: center;
  transition: background-color 0.15s;
  font-family: "Lato", sans-serif;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  height: 60px;
  border: none;
  cursor: pointer;
  max-width: 270px;
  width: 100%;
  &:hover {
    background-color: #04538c;
  }
  &:active {
    background-color: #034473;
  }
`;
