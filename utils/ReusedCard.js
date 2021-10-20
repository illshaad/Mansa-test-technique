import React from "react";
import { P, Card } from "../composant/connexion/Connexion.style";
import { FlexElement } from "../composant/dashboard/index.style";

export default function ReusedCard({
  margin,
  width,
  title,
  information,
  informationTwo,
  informationThree,
  data,
  dataTwo,
  dataThree,
}) {
  return (
    <Card margin={margin} width={width}>
      <P fontWeight="bold" fontSize="20px" color="black">
        {title}
      </P>
      <FlexElement justifyContent="center">
        <div>
          <P>{information}</P>
          <P>{informationTwo}</P>
          <P>{informationThree}</P>
        </div>
        <div>
          <P textAlign="left">{data}</P>
          <P textAlign="left">{dataTwo}</P>
          <P textAlign="left">{dataThree}</P>
        </div>
      </FlexElement>
    </Card>
  );
}
