import React from "react";
import ReusedCard from "../../utils/ReusedCard";
import { P, Button } from "../connexion/Connexion.style";
import { GridElement } from "./index.style";

export default function Accounts({ newData }) {
  return (
    <>
      <P
        fontWeight="bold"
        fontSize="20px"
        color="black"
        textAlign="left"
        marginTop="50px"
      >
        Accounts
      </P>

      <GridElement flexWrap="wrap">
        {newData.map((e, key) => (
          <ReusedCard
            margin="60px auto 0 auto"
            width="300px"
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
