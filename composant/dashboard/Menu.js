import React from "react";
import { ContainerMenu, FlexComponent, Span } from "./index.style";
import { ImageElement, P, Logo } from "../connexion/Connexion.style";
import Image from "next/image";
export default function Menu({ first, last, title, picture }) {
  const linkMenu = [
    {
      logo: (
        <Span>
          <Image src="/layout.png" alt="layout" width={20} height={20} />{" "}
          <P>Accounts</P>
        </Span>
      ),
    },
    {
      logo: (
        <Span>
          <Image src="/layout.png" alt="layout" width={20} height={20} />{" "}
          <P>Toto</P>
        </Span>
      ),
    },
    {
      logo: (
        <Span>
          <Image src="/layout.png" alt="layout" width={20} height={20} />{" "}
          <P>Tata</P>
        </Span>
      ),
    },
  ];

  return (
    <ContainerMenu>
      <Logo fontSize="20px">Mansa</Logo>
      <ImageElement img src={picture} alt="image" width="100px" />
      <FlexComponent>
        <P fontSize={13}>{title}</P>
        <P>.</P>
        <P fontSize={13}>{first}</P>
        <P fontSize={13}>{last}</P>
      </FlexComponent>
      s
      {linkMenu.map((e) => (
        <Span>{e.logo}</Span>
      ))}
    </ContainerMenu>
  );
}
