import styled from "styled-components";
import { device } from "../../styles/mediaQueriesBreakpoints";

export const ContainerMenu = styled.header`
  background-color: white;
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  box-shadow: 0px 0px white;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  align-items: center;
  gap: 10px;
  padding-top: ${({ paddingTop }) => paddingTop || null};
  color: white;
  @media ${device.tablet} {
    justify-content: space-around;
  }
`;

export const FlexComponent = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || null};
  text-align: center;
  display: flex;
  gap: ${({ gap }) => gap || "5px"};
  flex-wrap: ${({ flexWrap }) => flexWrap || null};
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  @media ${device.tablet} {
    align-items: center;
    gap: "10px";
  }
`;

export const FlexElement = styled.div`
  text-align: ${({ textAlign }) => textAlign || "center"};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || null};
  gap: ${({ gap }) => gap || "5px"};
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  @media ${device.tablet} {
    padding: 0 10px;
  }
`;

export const GridElement = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ gap }) => gap || "5px"};
  padding: 5px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
  }
`;

export const Span = styled.span`
  font-weight: 500;
  color: ${({ color }) => color || "#6347d1"};
  @media ${device.mobileM} {
    font-size: 14px;
  }
`;

export const ContainerInformation = styled.div`
  margin-top: 20px;
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  align-self: start;
  @media ${device.tablet} {
    width: 100%;
  }
`;
