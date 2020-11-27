import React from "react";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Container } from "../../components/styled";
import { TopMenu } from "../../components/TopMenu";
import { styled } from "../../config/theme";

type Props = {
  className?: string;
};

const HeaderComponent: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Container className="header-container">
        <Logo />
        <div className="menu-block">
          <TopMenu />
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export const Header = styled(HeaderComponent)`
  padding: 22px 0 31px 0;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-block {
  }
`;
