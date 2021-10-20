import React, { useState } from "react";
import Menu from "./Menu";
import { Logo } from "../connexion/Connexion.style";
import { FlexComponent } from "./index.style";
import Information from "./Information";

export default function Header({ user, siretMansa, dataAccounts }) {
  const { denomination } = siretMansa.unite_legale;
  const { siret, geo_adresse } = siretMansa.unite_legale.etablissement_siege;
  const { name } = user.results[0];
  const { first, last, title } = name;
  const picture = user.results[0].picture.large;

  const getAccountAndCurrent = dataAccounts.map((e) => {
    return {
      accountId: e.account_id,
      accountNumber: e.account_number,
      current: e.current,
    };
  });

  return (
    <>
      {/* <Logo>Mansa</Logo> */}
      <FlexComponent gap={"10%"}>
        <Menu first={first} last={last} title={title} picture={picture} />
        <Information
          first={first}
          denomination={denomination}
          siret={siret}
          geo_adresse={geo_adresse}
          newData={getAccountAndCurrent}
        />
      </FlexComponent>
    </>
  );
}
