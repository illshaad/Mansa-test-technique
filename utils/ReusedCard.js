import React, { useEffect } from "react";
import Axios from "axios";
import { P, Card } from "../composant/connexion/Connexion.style";
import { Span } from "../composant/dashboard/index.style";
import ReusedModal from "./ReusedModal";

export default function ReusedCard({
  accountId,
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
  padding,
  textAlign,
  device,
  dataModal,
}) {
  return (
    <Card margin={margin} width={width} height={height} padding={padding}>
      <P fontWeight="bold" fontSize="20px" color="black">
        {title}
      </P>
      <P textAlign={textAlign}>
        {information} <Span>{data}</Span>
      </P>
      <P textAlign={textAlign}>
        {informationTwo} <Span>{dataTwo}</Span> <Span>{device}</Span>
      </P>
      <P textAlign={textAlign}>
        {informationThree} <Span>{dataThree}</Span>
      </P>
      <ReusedModal dataModal={dataModal} accountId={accountId} />
    </Card>
  );
}
