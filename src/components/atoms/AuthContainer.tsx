import styled from "styled-components";

const AuthContainer = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  & > section:first-child {
    width: 40%;
    height: 100%;
    background-image: linear-gradient(120deg, #81fbb8 10%, #28c76f 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    img {
      width: 40%;
      min-width: 320px;
    }

    @media (max-width: 1024px) {
      & {
        display: none;
      }
    }
  }
`;

export default AuthContainer;
