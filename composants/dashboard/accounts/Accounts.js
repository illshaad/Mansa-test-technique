import React from "react";
import ReusedCard from "../../../reused/ReusedCard";
import { P } from "../../connexion/Connexion.style";
import { GridElement } from "../index.style";

export default function Accounts({ newData, isTablet, isMobile }) {
  return (
    <>
      <P
        fontWeight="bold"
        fontSize="20px"
        color="black"
        textAlign="left"
        marginTop="40px"
        padding={isTablet ? "30px 10px" : "15px 0px"}
        borderTop="1px solid #999"
        margin-top={isTablet ? "50px" : null}
      >
        My Accounts
      </P>

      <GridElement gap="5% " flexWrap="wrap">
        {newData.map((e, key) => (
          <>
            <ReusedCard
              key={key}
              accountId={e.accountId}
              padding="0 20px"
              margin="30px auto 0 auto"
              width="300px"
              height="170px"
              title="Account"
              textAlign="start"
              information="Accounts n° :"
              informationTwo="Balance :"
              data={e.accountNumber}
              dataTwo={e.current}
              device={e.currency}
              isMobile={isMobile}
            />
          </>
        ))}
      </GridElement>
    </>
  );
}
