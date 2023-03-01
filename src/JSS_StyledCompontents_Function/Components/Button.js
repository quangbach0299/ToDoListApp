import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "orange")};
  // background: linear-gradient(red, blue);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 1;
  &:hover {
    opacity: 0.5;
    transition: all 1s;
  }
  &.button_style {
    // background-color: red;
    font-size: 25px;
  }
`;

export const SmallButton = styled(Button)`
  background-color: orange;
  font-size: 0.5rem;
  padding: 1.5rem;
  font-size: 30px;
`;
