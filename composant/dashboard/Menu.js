import React from "react";
import { ContainerMenu, FlexComponent } from "./index.style";
import { ImageElement, P } from "../connexion/Connexion.style";

export default function Menu({ user }) {
  console.log(user);
  const { name } = user.results[0];
  const { first, last, title } = name;
  const picture = user.results[0].picture.large;
  return (
    <ContainerMenu>
      <ImageElement img src={picture} alt="image" width="100px" />
      <FlexComponent>
        <P fontSize={13} color="white">
          {title}
        </P>
        .
        <P fontSize={13} color="white">
          {first}
        </P>
        <P fontSize={13} color="white">
          {last}
        </P>
      </FlexComponent>
      <P fontSize={13} color="white">
        Accounts
      </P>
    </ContainerMenu>
  );
}
