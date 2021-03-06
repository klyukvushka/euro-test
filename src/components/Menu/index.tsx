import React from "react";
import { styled } from "../../config/theme";
import { Link } from "react-scroll";
import { media } from "../../config/media";

type MenuItemProps = { name: string; to: string };

type Props = {
  className?: string;
  menu: MenuItemProps[];
  clickHandler: () => void;
};

const MenuComponent: React.FC<Props> = ({ className, menu, clickHandler }) => {
  return (
    <nav className={className}>
      <ul className="bottom-menu">
        {menu.map((item: MenuItemProps) => (
          <li key={item.name}>
            <Link
              to={item.to}
              smooth={true}
              offset={0}
              duration={2000}
              className="bottom-menu__link"
              onClick={clickHandler}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Menu = styled(MenuComponent)`
  .bottom-menu {
    display: flex;
    ${media.tabletPortrait`
      flex-direction: column;
  `}
    li {
      margin-right: 65px;
      &:last-child {
        margin-right: 0;
        ${media.tabletPortrait`
          margin-bottom: 10px;
        `}
      }
      ${media.tabletPortrait`
        margin-right: 0;
        padding: 13px 0;
        border-bottom: 1px solid rgba(255,255,255, 0.4);
      `}
    }
    &__link {
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.text};
      transition: text-decoration 0.15s;
      ${media.tabletPortrait`
        color: #fff;
      `}
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
