import React from "react";
import Compagny from "./Compagny";
import Accounts from "./Accounts";

export default function Information({
  first,
  denomination,
  siret,
  geo_adresse,
  newData,
}) {
  return (
    <div
      style={{ marginTop: "20px", flexDirection: "column", alignSelf: "start" }}
    >
      <Compagny
        first={first}
        denomination={denomination}
        siret={siret}
        geo_adresse={geo_adresse}
      />
      <Accounts newData={newData} />
    </div>
  );
}
