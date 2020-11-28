import React from "react";
import { styled } from "../../config/theme";

export type ReviewType = {
  name: string;
  text: string;
  role: string;
  avatar: string;
};

type Props = {
  className?: string;
  name: string;
  text: string;
  role: string;
  avatar: string;
};

const ReviewComponent: React.FC<Props> = ({
  className,
  name,
  text,
  role,
  avatar,
}) => {
  return (
    <div className={className}>
      <p className="review-text">{text}</p>
      <div className="review-author">
        <img src={avatar} alt="review's author" className="review-avatar" />
        <div>
          <div className="review-name">{name}</div>
          <div className="review-role">{role}</div>
        </div>
      </div>
    </div>
  );
};

export const Review = styled(ReviewComponent)`
  padding: 45px 95px;
  background-color: ${(props) => props.theme.colors.grey};
  color: #000000;
  .review-text {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 58px;
  }
  .review-author {
    display: flex;
    align-items: center;
  }
  .review-avatar {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin-right: 35px;
  }
  .review-name {
    font-weight: 900;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  .review-role {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    color: #4f4f4f;
  }
`;
