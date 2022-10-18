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

  & > section:last-child {
    display: flex;
    flex-direction: column;
    gap: 28px;
    height: 470px;

    & > main {
      flex: 1;
      & > section {
        height: 100%;
        form {
          height: 100%;
          position: relative;

          button {
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 5px;
            border: none;
            background-color: #28c76f;
            color: #fff;

            &:disabled {
              background-color: #ddd !important;
              color: #ccc !important;
            }
          }
        }
      }
    }
  }
`;

export default AuthContainer;
