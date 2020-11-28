import styled from "styled-components";
import { css } from "styled-components";
import { media } from "../../config/media";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  position: relative;
  padding: 0 20px;
  margin: 0 auto;
  ${media.phone`
    padding: 0 15px;
  `}
`;

export const H2 = styled.h2`
  margin-top: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: 27px;
  letter-spacing: 1.3px;
  color: ${(props) => props.theme.colors.title};
  ${media.phone`
    font-size: 22px;
    line-height: 28px;
  `}
`;

export const Subtitle = styled.p`
  margin: 0;
  font-family: "Merriweather", sans-serif;
  font-size: 48px;
  font-weight: 900;
  line-height: 69px;
  color: ${(props) => props.theme.colors.subtitle};
  span {
    color: ${(props) => props.theme.colors.blue};
  }
  ${media.tabletL`
    font-size: 40px;
    line-height: 52px;
  `}
  ${media.phone`
    font-size: 28px;
    line-height: 30px;
  `}
`;

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

export const Label = styled.label`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 15px;
`;
