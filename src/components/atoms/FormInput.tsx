import styled from "styled-components";

interface Props {
  border?: string;
  width?: string;
  height?: string;
}

const FormInput = styled.input<Props>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "56px"};
  font-size: 16px;
  padding: 14px;
  color: #222222;
  border: ${(props) => props.border || "1px solid #ddd"};
  border-radius: 5px;
  background-color: #fff;

  &.error {
    border-color: #ee2554;
    background-color: #fdf4f6;
  }

  &:focus {
    outline: none;
  }
`;

export default FormInput;
