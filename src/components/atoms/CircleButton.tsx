import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  backgroundColor?: string;
  color?: string;
}

const CircleButton = styled.button<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CircleButton;
