import styled from "styled-components";

interface Props {
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}

const Title2 = styled.h3<Props>`
  font-size: 18px;
  letter-spacing: -0.015rem;
  line-height: 24px;
  color: ${(props) => props.color || "#1c1c1c"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
`;

export default Title2;
