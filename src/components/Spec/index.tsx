import React from "react";
import { styled } from "../../config/theme";
import house from "../../images/house.png";

type Props = {
  className?: string;
  text: string;
};

const SpecComponent: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
};

export const Spec = styled(SpecComponent)`
  padding: 45px;
  background-image: url(${house});
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  width: 350px;
  height: 360px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  color: #fff;
  position: relative;
  span {
    position: relative;
    z-index: 1;
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: background-color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    &:before {
      background-color: rgba(0, 95, 163, 0.65);
    }
  }
`;
