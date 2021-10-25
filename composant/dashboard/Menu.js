import React from "react";
import { ContainerMenu, FlexComponent, FlexElement, Span } from "./index.style";
import { ImageElement, P, Logo } from "../connexion/Connexion.style";
import Image from "next/image";
import { device, screensizeInt } from "../../styles/mediaQueriesBreakpoints";

import useScreenSize from "../../hook/useScreenSize";

export default function Menu({ first, last, title, picture }) {
  const isTablet = useScreenSize().width <= screensizeInt.tablet;
  const isMobile = useScreenSize().width <= screensizeInt.mobileM;

  return (
    <ContainerMenu
      flexDirection={isTablet ? "row" : "column"}
      height={isTablet ? "90px" : "100vh"}
      width={isTablet ? "100%" : "14%"}
      paddingTop={!isTablet ? "30px" : null}
    >
      <div>
        <Logo>Mansa</Logo>
      </div>
      <FlexComponent flexDirection={isTablet ? "row" : "column"}>
        {!isMobile ? (
          <ImageElement
            img
            src={picture}
            alt="image"
            width={isTablet ? "60px" : "100px"}
          />
        ) : null}

        <FlexComponent>
          <P fontSize={13}>{title}</P>
          <P>.</P>
          <P fontSize={13}>{first}</P>
          <P fontSize={13}>{last}</P>
        </FlexComponent>
      </FlexComponent>

      <FlexComponent
        flexDirection={isTablet ? "row" : "column"}
        gap="10px"
        textAlign="start"
      >
        <div>
          {!isTablet ? (
            <Image src="/layout.png" alt="layout" width={18} height={18} />
          ) : null}

          <Span>Accounts</Span>
        </div>
        <div>
          {!isTablet ? (
            <Image src="/layout.png" alt="layout" width={18} height={18} />
          ) : null}
          <Span>Foo</Span>
        </div>
        <div>
          {!isTablet ? (
            <Image src="/layout.png" alt="layout" width={18} height={18} />
          ) : null}
          <Span>Bar</Span>
        </div>
      </FlexComponent>
    </ContainerMenu>
  );
}

// export const FlexComponentStyle = styled(FlexComponent)`
//   flex-direction: column;
//   @media ${device.tablet} {
//     flex-direction: row;
//   }
// `;
