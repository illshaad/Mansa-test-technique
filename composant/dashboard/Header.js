import React from "react";
import Menu from "./Menu";
import { Logo } from "../connexion/Connexion.style";

export default function Header({ user }) {
  return (
    <>
      <Logo>Mansa</Logo>
      <Menu user={user} />
    </>
  );
}
