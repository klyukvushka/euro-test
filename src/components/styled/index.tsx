import styled from "styled-components";
// import { media } from "../../config/media";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  position: relative;
  padding: 0 15px;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  margin-top: 0;
  font-size: 24px;
  font-weight: 900;
  line-height: 33px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.title};
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
`;
