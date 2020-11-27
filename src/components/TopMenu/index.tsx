import React from "react";
import { styled } from "../../config/theme";
import { ClockIcon, MailIcon, PhoneIcon, PingIcon } from "../Icons";

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

type itemProps = {
  icon: React.ReactNode;
  text: string;
  to?: string;
};

type Props = {
  className?: string;
};

const TopMenuComponent: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="top-menu">
        {topMenu.map((item: itemProps) => (
          <li key={item.text}>
            {item.to ? (
              <a href={item.to} className="top-menu__link">
                {item.icon}
                <span>{item.text}</span>
              </a>
            ) : (
              <>
                {item.icon}
                <span>{item.text}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const TopMenu = styled(TopMenuComponent)`
  .top-menu {
    display: flex;
    margin-bottom: 22px;
    li {
      display: inline-flex;
      align-items: center;
      margin-right: 44px;
      &:last-child {
        margin-right: 0;
      }
      span {
        margin-left: 15px;
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
        color: #000;
      }
    }
    &__link {
      display: inline-flex;
      align-items: center;
    }
  }
`;
