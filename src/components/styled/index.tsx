import { css } from "styled-components";
import { media } from "../../config/media";

export const InputStyled = css`
  background-color: transparent;
  width: 100%;
  padding: 7px 0;
  color: ${(props) => props.theme.colors.title};
  border: none;
  border-bottom: 1px solid #ffffff;
  font-weight: 300;
  font-size: 21px;
  line-height: 29px;
  transition: box-shadow 0.15s ease-out;
  &::placeholder {
    font-weight: 300;
    font-size: 21px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.title};
    ${media.phone`
    font-size: 16px;
    line-height: 24px;
  `}
  }
`;
