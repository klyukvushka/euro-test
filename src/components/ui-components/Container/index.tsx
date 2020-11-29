import { css } from "styled-components";
import { media } from "../../../config/media";
import { styled } from "../../../config/theme";

export const Content = css`
  width: 100%;
  max-width: 1140px;
  position: relative;
  padding: 0 20px;
  margin: 0 auto;
  ${media.phone`
    padding: 0 15px;
  `}
`;

export const Container = styled.div`
  ${Content}
`;
