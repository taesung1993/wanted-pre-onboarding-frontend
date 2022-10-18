import styled from "styled-components";

interface Props {
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}

const Title1 = styled.h3<Props>`
  font-size: 24px;
  letter-spacing: -0.015rem;
  line-height: 29px;
  color: ${(props) => props.color || "#1c1c1c"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
`;

export default Title1;
