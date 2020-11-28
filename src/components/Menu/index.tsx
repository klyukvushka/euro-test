import React from "react";
import { styled } from "../../config/theme";
import { Link } from "react-scroll";

type MenuItemProps = { name: string; to: string };

type Props = {
  className?: string;
  menu: MenuItemProps[];
};

const MenuComponent: React.FC<Props> = ({ className, menu }) => {
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
    li {
      margin-right: 68px;
      &:last-child {
        margin-right: 0;
      }
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
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
