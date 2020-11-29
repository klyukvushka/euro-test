import styled from "styled-components";
import { media } from "../../../config/media";

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
