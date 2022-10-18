import styled from "styled-components";

interface Props {
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}

const Body2 = styled.div<Props>`
  font-size: 15px;
  letter-spacing: -0.015rem;
  line-height: 19px;
  color: ${(props) => props.color || "#1c1c1c"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
`;

export default Body2;
