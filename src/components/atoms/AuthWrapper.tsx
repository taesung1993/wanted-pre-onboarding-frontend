import styled from "styled-components";

const AuthWrapper = styled.section`
  flex: 1;
  padding: 0 10%;

  nav ul {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999999;
    margin-bottom: -1px;

    li {
      flex: 1;
      height: 100%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        text-align: center;
        color: #999999;
        h3 {
          opacity: 0.6;
        }

        &.active {
          color: #28c76f;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 3px;
            background-color: #28c76f;
          }

          h3 {
            opacity: 1 !important;
          }
        }
      }
    }
  }

  @media (max-width: 420px) {
    padding: 0 16px;
  }
`;

export default AuthWrapper;
