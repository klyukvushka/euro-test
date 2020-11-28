import React from "react";
import { media } from "../../config/media";
import { styled } from "../../config/theme";
import { Container } from "../styled";

type Props = {
  className?: string;
};

const FooterComponent: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <Container className="container">
        <p>2019 (с) Все права защищены. БухОне.ру</p>
        <p>Разработано: BuhOne</p>
      </Container>
    </footer>
  );
};

export const Footer = styled(FooterComponent)`
  font-size: 14px;
  line-height: 19px;
  color: #000;
  padding: 50px 0 40px;
  ${media.phone`
      padding: 20px 0;
  `}
  .container {
    display: flex;
    justify-content: space-between;
    ${media.phone`
      flex-direction: column;
      align-items: center;
  `}
  }
`;
