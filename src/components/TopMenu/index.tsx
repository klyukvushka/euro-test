import React from "react";
import { styled } from "../../config/theme";

type ItemProps = {
  icon: React.ReactNode;
  text: string;
  to?: string;
};

type Props = {
  className?: string;
  topMenu: ItemProps[];
};

const TopMenuComponent: React.FC<Props> = ({ className, topMenu }) => {
  return (
    <div className={className}>
      <ul className="top-menu">
        {topMenu.map((item: ItemProps) => (
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
    </div>
  );
};

export const TopMenu = styled(TopMenuComponent)`
  .top-menu {
    display: flex;
    margin-bottom: 16px;
    justify-content: flex-end;
    li {
      display: inline-flex;
      align-items: center;
      margin-right: 41px;
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
