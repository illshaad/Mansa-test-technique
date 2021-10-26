import React from "react";
import ReusedCard from "../../utils/ReusedCard";
import { P } from "../connexion/Connexion.style";
import { FlexElement } from "./index.style";

export default function Compagny({
  first,
  denomination,
  siret,
  geo_adresse,
  isTablet,
}) {
  return (
    <>
      <FlexElement>
        <P
          fontWeight="bold"
          fontSize="20px"
          color="black"
          marginTop={isTablet ? "50px" : null}
        >
          Good Morning,
        </P>
        <P
          fontSize="20px"
          color="#6347D1"
          fontWeight="600"
          marginTop={isTablet ? "50px" : null}
        >
          {first}
        </P>
      </FlexElement>
      <ReusedCard
        margin="20px auto 0 10px"
        width="500px"
        padding="20px 0"
        title="Information my Compagny"
        information="Name :"
        informationTwo="Siret :"
        informationThree="Address :"
        data={denomination}
        dataTwo={siret}
        dataThree={geo_adresse}
      />
    </>
  );
}
