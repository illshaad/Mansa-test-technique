import styled from "styled-components";

export const ContainerMenu = styled.div`
  background-color: white;
  width: 14%;
  height: 100vh;
  box-shadow: 0px 0px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 30px;
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
  text-align: center;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || null};
  gap: ${({ gap }) => gap || "5px"};
`;

export const GridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ gap }) => gap || "5px"};
`;

export const Span = styled.span`
  font-weight: 500;
  color: #6347d1;
`;
