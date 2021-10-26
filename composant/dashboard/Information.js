import React from "react";
import Compagny from "./Compagny";
import Accounts from "./Accounts";
import { ContainerInformation } from "../dashboard/index.style";
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
