import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  minWidth: number;
}

const Div = styled.div<Props>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  min-width: ${(props) => `${props.minWidth}px` || "auto"};
`;

export default Div;
