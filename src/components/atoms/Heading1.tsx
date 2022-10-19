import styled from "styled-components";

interface Props {
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}

const Heading1 = styled.h1<Props>`
  font-size: 28px;
  letter-spacing: -0.015rem;
  line-height: 32px;
  color: ${(props) => props.color || "#1c1c1c"};
  font-weight: ${(props) => props.fontWeight || 700};
  text-align: ${(props) => props.textAlign || "left"};
`;

export default Heading1;
