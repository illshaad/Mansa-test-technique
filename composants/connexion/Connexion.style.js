import styled from "styled-components";
import { device } from "../../utils/mediaQueriesBreakpoints";

export const Container = styled.div`
  height: 100vh;
  background-image: url("/background.jpg");
`;

export const Card = styled.div`
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width || "40%"};
  height: ${({ height }) => height || "40%"};
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px #6347d1;
  text-align: center;
  margin: ${({ margin }) => margin || "250px auto 0 auto"};
  @media ${device.tablet} {
    height: 190px;
  }
  @media ${device.mobileL} {
    height: 170px;
    width: 330px;
  }
`;

export const ComponentImage = styled.div`
  padding: 3px;
  width: ${({ width }) => width || "135px"};
  height: ${({ height }) => height || "145px"};
  border-radius: 100%;
  margin-bottom: 30px;
  margin: 0 auto;
`;
export const ImageElement = styled.img`
  width: ${({ width }) => width || "135px"};
  border-radius: 100%;
`;

export const P = styled.p`
  color: ${({ color }) => color || "#999"};
  font-size: ${({ fontSize }) => fontSize || "18px"};
  margin-top: ${({ marginTop }) => marginTop || "10px"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  font-weight: ${({ fontWeight }) => fontWeight || null};
  padding: ${({ padding }) => padding || null};
  border-top: ${({ borderTop }) => borderTop || null};
  @media ${device.tablet} {
    font-size: 18px;
    margin-top: 18px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

export const Name = styled.p`
  color: #2c2e31;
  font-size: 38px;
  margin: 5px;
`;

export const Logo = styled.div`
  color: #6341d1;
  font-size: 40px;
  margin-left: ${({ marginLeft }) => marginLeft || null};
  padding-top: ${({ paddingTop }) => paddingTop || null};
  @media ${device.mobileL} {
    font-size: 16px;
    font-weight: 800;
  }
`;

export const Button = styled.a`
  background: #cd9bf6;
  font-size: 15px;
  line-height: 1rem;
  border-radius: 4px;
  width: 140px;
  height: 40px;
  color: #f9f9f9;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 5px auto;
  cursor: ${({ cursor }) => cursor || null};
  @media ${device.tablet} {
    height: 30px;
  }
`;
