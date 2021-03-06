import React from "react";
import { media } from "../../config/media";
import { styled } from "../../config/theme";

type ItemProps = {
  icon: React.ReactNode;
  text: string;
  to?: string;
  blank?: boolean;
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
              <>
                {!item.blank ? (
                  <a href={item.to} className="top-menu__link">
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="top-menu__link"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                )}
              </>
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
    ${media.tabletPortrait`
      display: flex;
      flex-direction: column;
  `}
    li {
      display: inline-flex;
      align-items: center;
      margin-right: 41px;
      &:last-child {
        margin-right: 0;
      }
      svg path {
        ${media.tabletPortrait`
          fill: #fff;
      `}
      }
      ${media.tabletPortrait`
        margin-right: 0;
        padding: 7px 0;
      `}
      span {
        margin-left: 15px;
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
        color: #000;
        ${media.tabletPortrait`
          font-size: 15px;
        color: #fff;
    
      `}
      }
    }
    &__link {
      display: inline-flex;
      align-items: center;
    }
  }
`;
