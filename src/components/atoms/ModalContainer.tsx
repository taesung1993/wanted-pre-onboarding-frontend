import styled from "styled-components";

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > section {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .modal-body {
      width: 100%;
      max-width: 320px;
      padding: 20px;
      border-radius: 5px;
      background-color: white;
      animation: FadeIn 0.5s ease-in-out;
      @keyframes FadeIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      main {
        padding: 20px 0;
      }
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }
  }
`;

export default ModalContainer;
