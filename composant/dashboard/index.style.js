import styled from "styled-components";

export const ContainerMenu = styled.div`
  background-color: white;
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  box-shadow: 0px 0px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: ${({ paddingTop }) => paddingTop || null};
  color: white;
`;

export const FlexComponent = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || null};
  text-align: center;
  display: flex;
  gap: ${({ gap }) => gap || "5px"};
  flex-wrap: ${({ flexWrap }) => flexWrap || null};
`;

export const FlexElement = styled.div`
  text-align: ${({ textAlign }) => textAlign || "center"};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || null};
  gap: ${({ gap }) => gap || "5px"};
  flex-direction: ${({ flexDirection }) => flexDirection || null};
`;

export const GridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ gap }) => gap || "5px"};
`;

export const Span = styled.span`
  font-weight: 500;
  color: ${({ color }) => color || "#6347d1"};
`;
