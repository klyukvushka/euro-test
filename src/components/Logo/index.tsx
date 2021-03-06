import React from "react";
import { media } from "../../config/media";
import { styled } from "../../config/theme";
import { LogoIcon } from "../ui-components/Icons";

type Props = {
  className?: string;
};

const LogoComponent: React.FC<Props> = ({ className }) => {
  return (
    <a href="/#" className={className}>
      <LogoIcon /> <span>BuhOne</span>
    </a>
  );
};

export const Logo = styled(LogoComponent)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue};
  font-family: "Merriweather", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 49px;
  span {
    margin-left: 30px;
    ${media.phone`
      margin-left: 20px;
      font-size: 30px;
      line-height: 38px;
  `}
  }
`;
