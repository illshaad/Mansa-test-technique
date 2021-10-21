import React from "react";
import { P, Card } from "../composant/connexion/Connexion.style";
import { FlexElement, Span } from "../composant/dashboard/index.style";

export default function ReusedCard({
  margin,
  width,
  height,
  title,
  information,
  informationTwo,
  informationThree,
  data,
  dataTwo,
  dataThree,
}) {
  return (
    <Card margin={margin} width={width} height={height}>
      <P fontWeight="bold" fontSize="20px" color="black">
        {title}
      </P>
      <P>
        {information} <Span>{data}</Span>
      </P>
      <P>
        {informationTwo} <Span>{dataTwo}</Span>
      </P>
      <P>
        {informationThree} <Span>{dataThree}</Span>
      </P>
    </Card>
  );
}
