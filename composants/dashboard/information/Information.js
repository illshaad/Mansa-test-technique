import React from "react";
import Compagny from "../compagny/Compagny";
import Accounts from "../accounts/Accounts";
import { ContainerInformation } from "../index.style";
export default function Information({
  first,
  denomination,
  siret,
  geo_adresse,
  newData,
  isTablet,
  isMobile,
}) {
  return (
    <ContainerInformation>
      <Compagny
        first={first}
        denomination={denomination}
        siret={siret}
        geo_adresse={geo_adresse}
        isTablet={isTablet}
      />
      <Accounts newData={newData} isTablet={isTablet} isMobile={isMobile} />
    </ContainerInformation>
  );
}
