import React from "react";
import { ContainerMenu, FlexComponent, FlexElement, Span } from "./index.style";
import { ImageElement, P, Logo } from "../connexion/Connexion.style";
import Image from "next/image";

export default function Menu({ first, last, title, picture }) {
  return (
    <ContainerMenu height="100vh" width="14%" paddingTop="30px">
      <Logo fontSize="20px">Mansa</Logo>
      <ImageElement img src={picture} alt="image" width="100px" />
      <FlexComponent>
        <P fontSize={13}>{title}</P>
        <P>.</P>
        <P fontSize={13}>{first}</P>
        <P fontSize={13}>{last}</P>
      </FlexComponent>

      <FlexElement flexDirection="column" gap="10px" textAlign="start">
        <div>
          <Image src="/layout.png" alt="layout" width={18} height={18} />,
          <Span>Accounts</Span>
        </div>
        <div>
          <Image src="/layout.png" alt="layout" width={18} height={18} />,
          <Span>Foo</Span>
        </div>
        <div>
          <Image src="/layout.png" alt="layout" width={18} height={18} />,
          <Span>Bar</Span>
        </div>
      </FlexElement>
    </ContainerMenu>
  );
}
