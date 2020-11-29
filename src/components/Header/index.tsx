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

export const disableScroll = {
  enable: () => {
    document.body.style.overflow = "hidden";
  },
  disable: () => {
    document.body.style.overflow = "";
  },
};

const HeaderComponent: React.FC<Props> = ({ className }) => {
  const [isToggled, setToggled] = React.useState(false);

  const openMenu = () => {
    setToggled(true);
    disableScroll.enable();
  };

  const closeMenu = () => {
    setToggled(false);
    disableScroll.disable();
  };

  return (
    <header className={className}>
      <Container className="header-container">
        <Logo />
        <div
          className={isToggled ? "header-mobile active" : "header-mobile"}
          onClick={() => (isToggled ? closeMenu() : openMenu())}
        >
          <div className="header-mobile__item header-mobile__item_one"></div>
          <div className="header-mobile__item header-mobile__item_two"></div>
          <div className="header-mobile__item header-mobile__item_three"></div>
        </div>

        <div className={isToggled ? "menu-block active" : "menu-block"}>
          <TopMenu topMenu={topMenu} />
          <Menu menu={menu} clickHandler={closeMenu} />
        </div>
      </Container>
    </header>
  );
};

export const Header = styled(HeaderComponent)`
  padding: 22px 0 29px 0;
  ${media.tabletLandscape`
    padding: 15px 0;
  `}
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.tabletLandscape`
      flex-direction: column;
  `}
    ${media.tabletPortrait`
      flex-direction: row;
  `}
  }
  .menu-block {
    ${media.tabletLandscape`
      margin-top: 15px;
  `}
    ${media.tabletPortrait`
      display: none;
  
  `}
  &.active {
      ${media.tabletPortrait`
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      background-color: #005fa3;
      padding: 45px 30px 0 30px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 12;
      margin-top: 0
    `}
    }
  }
  .header-mobile {
    display: none;
    width: 35px;
    height: 30px;
    flex-shrink: 0;
    ${media.tabletPortrait`
      display: block;
   
    `}
    &__item {
      width: 100%;
      height: 4px;
      background: ${(props) => props.theme.colors.text};
      margin: 4px auto;
      transition: all 0.3s;
      backface-visibility: hidden;
    }
    &.active {
      position: fixed;
      right: 17px;
      z-index: 15;
      .header-mobile__item {
        background-color: #fff;
        &_one {
          transform: rotate(45deg) translate(5px, 5px);
        }
        &_two {
          opacity: 0;
        }
        &_three {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      }
    }
  }
`;
