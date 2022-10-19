import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  minWidth?: number;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
}

const Div = styled.div<Props>`
  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.justifyContent || "none"};
  flex-direction: ${(props) => props.flexDirection || "none"};
  align-items: ${(props) => props.alignItems || "none"};
  gap: ${(props) => props.gap || "none"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  min-width: ${(props) => `${props.minWidth}px` || "auto"};
`;

export default Div;
