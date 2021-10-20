import styled from "styled-components";

export const ContainerMenu = styled.div`
  background-color: white;
  width: 10%;
  height: 500px;
  border-radius: 1rem;
  box-shadow: 0px 0px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 50px 0px 0px 25px;
  padding-top: 30px;
  color: white;
`;

export const FlexComponent = styled.div`
  text-align: center;
  align-items: baseline;
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
