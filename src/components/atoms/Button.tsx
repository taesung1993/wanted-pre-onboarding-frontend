import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const Button = styled.button<Props>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "56px"};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || "18px"};
  color: ${(props) => props.color || "#1c1c1c"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "none"};
`;

export default Button;
