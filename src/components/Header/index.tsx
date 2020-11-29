import React from "react";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Container } from "../../components/ui-components/Container";
import { TopMenu } from "../../components/TopMenu";
import { styled } from "../../config/theme";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PingIcon,
} from "../../components/ui-components/Icons";
import { media } from "../../config/media";

type Props = {
  className?: string;
};
const menu = [
  { name: "главная", to: "/" },
  { name: "услуги", to: "services" },
  { name: "кейсы", to: "clients" },
  { name: "о компании", to: "about" },
  { name: "контакты", to: "contacts" },
];

const topMenu = [
  {
    icon: <PhoneIcon />,
    text: "8 (111) 222-33-44",
    to: "tel:8-111-222-33-44",
  },
  {
    icon: <ClockIcon />,
    text: "Пн-Пт 10:00-18:00",
  },
  {
    icon: <MailIcon />,
    text: "order@buhone.ru",
    to: "mailto:order@buhone.ru",
  },
  {
    icon: <PingIcon />,
    text: "Невский пр. 130",
    to: "https://goo.gl/maps/PwHM3K5yuzt15hap6",
  },
];

const HeaderComponent: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Container className="header-container">
        <Logo />
        <div className="menu-block">
          <TopMenu topMenu={topMenu} />
          <Menu menu={menu} />
        </div>
      </Container>
    </header>
  );
};

export const Header = styled(HeaderComponent)`
  padding: 22px 0 29px 0;
  ${media.tabletL`
    padding: 15px 0;
  `}
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.tabletL`
      flex-direction: column;
  `}
    ${media.tablet`
      flex-direction: row;
  `}
  }
  .menu-block {
    ${media.tabletL`
      margin-top: 15px;
  `}
    ${media.tablet`
      display: flex;
      flex-direction: column-reverse;
      background-color: #005fa3;
      padding: 0 30px;
  `}
  }
`;
