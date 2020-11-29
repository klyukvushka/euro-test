import React from "react";
import { media } from "../../config/media";
import { styled } from "../../config/theme";

type Props = {
  className?: string;
  num: number;
  text: string;
};

const CaseComponent: React.FC<Props> = ({ className, num, text }) => {
  return (
    <div className={className}>
      <div className="case-wrapper">
        <div className="case-number">{num}</div>
        <div className="case-text">{text}</div>
      </div>

      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="case-link"
      >
        Все кейсы
      </a>
    </div>
  );
};

export const Case = styled(CaseComponent)`
  padding: 30px 40px 40px;
  background-color: ${(props) => props.theme.colors.grey};
  display: flex;
  flex-direction: column;
  width: 47.4%;
  height: 255px;
  margin-bottom: 30px;
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  ${media.tabletPortrait`
    width: 235px;
    margin-left: 15px;
    margin-right: 15px;
  `}
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    div,
    .case-link {
      color: #fff;
    }
  }
  .case-wrapper {
    flex: 1 0 auto;
  }
  .case-number {
    font-size: 55px;
    font-weight: 900;
    line-height: 66px;
    letter-spacing: 0.1em;
    margin-bottom: 17px;
    transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  .case-text {
    font-size: 13px;
    max-width: 130px;
    font-weight: 700;
    line-height: 18px;
    transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  .case-link {
    flex: 0 0 auto;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-decoration: underline;
    color: ${(props) => props.theme.colors.blue};
    transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;
