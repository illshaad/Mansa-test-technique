import React from "react";
import { ContainerMenu, FlexComponent, SpanMenu } from "../index.style";
import { ImageElement, P, Logo } from "../../connexion/Connexion.style";

export default function Menu({
  first,
  last,
  title,
  picture,
  isTablet,
  isMobile,
}) {
  return (
    <ContainerMenu
      flexDirection={isTablet ? "row" : "column"}
      height={isTablet ? "90px" : null}
      width={isTablet ? "100%" : "14%"}
      paddingTop={!isTablet ? "30px" : null}
    >
      <>
        <Logo>Mansa</Logo>
      </>
      <FlexComponent
        flexDirection={isTablet ? "row" : "column"}
        alignItem="center"
      >
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
          <SpanMenu>Accounts</SpanMenu>
        </div>
        <div>
          <P>Foo</P>
        </div>
        <div>
          <P>Bar</P>
        </div>
      </FlexComponent>
    </ContainerMenu>
  );
}
