import React from "react";
import { styled } from "../../config/theme";
import house from "../../images/house.png";

type Props = {
  className?: string;
  text: string;
};

const SpecComponent: React.FC<Props> = ({ className, text }) => {
  return <div className={className}>{text}</div>;
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
  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1);
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
  color: #fff;
  &:hover {
    background-image: linear-gradient(
        0deg,
        rgba(0, 95, 163, 0.65),
        rgba(0, 95, 163, 0.65)
      ),
      url(${house});
  }
`;
