import styled from "styled-components";
import { media } from "../../../config/media";

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
  ${media.tabletLandscape`
    font-size: 40px;
    line-height: 52px;
  `}
  ${media.phone`
    font-size: 28px;
    line-height: 30px;
  `}
`;
