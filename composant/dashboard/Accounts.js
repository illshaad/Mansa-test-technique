import React from "react";
import ReusedCard from "../../utils/ReusedCard";
import { P } from "../connexion/Connexion.style";
import { GridElement } from "./index.style";

export default function Accounts({ newData }) {
  return (
    <>
      <P
        fontWeight="bold"
        fontSize="20px"
        color="black"
        textAlign="left"
        marginTop="40px"
        paddingTop="10px"
        borderTop="1px solid #999"
      >
        My Accounts
      </P>

      <GridElement gap="5% " flexWrap="wrap">
        {newData.map((e, key) => (
          <ReusedCard
            key={key}
            margin="60px auto 0 auto"
            width="300px"
            height="170px"
            title="Account"
            information="Accounts n° :"
            informationTwo="Balance :"
            data={e.accountNumber}
            dataTwo={e.current}
          />
        ))}
      </GridElement>
    </>
  );
}
