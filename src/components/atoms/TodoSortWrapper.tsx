import styled from "styled-components";

const TodoSortWrapper = styled.nav`
  width: 100%;
  margin: 10px 0;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999999;
    margin-bottom: -1px;

    li {
      height: 100%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 8px 32px;
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

    @media (max-width: 420px) {
      li {
        flex: 1;
        a {
          padding: 8px 0;
        }
      }
    }
  }
`;

export default TodoSortWrapper;
