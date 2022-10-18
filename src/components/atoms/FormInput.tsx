import styled from "styled-components";

const FormInput = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;
  padding: 14px;
  color: #222222;
  border: 1px solid #dddddd;
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
