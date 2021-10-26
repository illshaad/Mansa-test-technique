import React from "react";
import styled from "styled-components";
import { P, Card } from "../composant/connexion/Connexion.style";
import { Span } from "../composant/dashboard/index.style";
import { device } from "../utils/mediaQueriesBreakpoints";
import Modal from "../composant/dashboard/Modal";

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
  isMobile,
}) {
  return (
    <CardStyle margin={margin} width={width} height={height} padding={padding}>
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
      {accountId && (
        <Modal
          dataModal={dataModal}
          accountId={accountId}
          isMobile={isMobile}
        />
      )}
    </CardStyle>
  );
}

const CardStyle = styled(Card)`
  @media ${device.tablet} {
    margin: 15px auto 0 auto;
  }
`;
