import styled from "styled-components";

export const Card = styled.div`
  padding: ${({ padding }) => padding || "20px 0px"};
  width: ${({ width }) => width || "40%"};
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 9px white;
  text-align: center;
  margin: ${({ margin }) => margin || "250px auto 0 auto"};
`;

export const ComponentImage = styled.div`
  padding: 3px;
  width: ${({ width }) => width || "135px"};
  height: ${({ height }) => height || "145px"};
  border-radius: 100%;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
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
`;

export const Name = styled.p`
  color: #2c2e31;
  font-size: 38px;
  margin: 5px;
`;

export const Logo = styled.div`
  color: #6341d1;
  font-size: 30px;
  margin-left: 30px;
  padding-top: 30px;
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
`;
