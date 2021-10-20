import React from "react";
import { ContainerMenu, FlexComponent } from "./index.style";
import { ImageElement, P, Button } from "../connexion/Connexion.style";

export default function Menu({ first, last, title, picture }) {
  return (
    <ContainerMenu>
      <ImageElement img src={picture} alt="image" width="100px" />
      <FlexComponent>
        <P fontSize={13}>{title}</P>
        <P>.</P>
        <P fontSize={13}>{first}</P>
        <P fontSize={13}>{last}</P>
      </FlexComponent>
      <Button>Accounts</Button>
      <Button>Foo</Button>
      <Button>Bar</Button>
    </ContainerMenu>
  );
}
