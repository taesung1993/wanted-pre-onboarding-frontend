import styled from "styled-components";

const TodosContainer = styled.article`
  width: 100vw;
  height: 100vh;

  & > section {
    width: 100%;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }
`;

export default TodosContainer;
