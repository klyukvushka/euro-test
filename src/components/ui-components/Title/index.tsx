import styled from "styled-components";
import { media } from "../../../config/media";

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
