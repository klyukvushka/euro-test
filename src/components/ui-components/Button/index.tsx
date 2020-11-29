import { styled } from "../../../config/theme";

export const Button = styled.button`
  padding: 19px 18px;
  background-color: ${(props) => props.theme.colors.blue};
  display: block;
  text-align: center;
  transition: background-color 0.15s;
  font-family: "Lato", sans-serif;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  height: 60px;
  border: none;
  cursor: pointer;
  max-width: 270px;
  width: 100%;
  &:hover {
    background-color: #04538c;
  }
  &:active {
    background-color: #034473;
  }
`;
