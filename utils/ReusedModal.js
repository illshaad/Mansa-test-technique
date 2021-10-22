import React, { useState } from "react";
import { P, Button } from "../composant/connexion/Connexion.style";
import Modal from "react-modal";
import {
  ContainerMenu,
  FlexElement,
  Span,
} from "../composant/dashboard/index.style";

import { getDataAccountsId } from "../service/getApi";

const customStyles = {
  content: {
    boxShadow: "0px 0px 3px #6347d1",
    width: "500px",
    height: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ReusedCard({ accountId }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [myNewData, setMyNewData] = useState([]);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getDataId = () => {
    return getDataAccountsId(accountId).then((data) => {
      console.log(data, "?????");
      const structurationData = data.map((e) => {
        return {
          amount: e.amount,
          time: e.timestamp,
          transaction: e.transaction_category,
        };
      });
      setMyNewData(structurationData);
    });
  };

  return (
    <div>
      <Button
        cursor="pointer"
        onClick={() => {
          openModal();
          getDataId();
        }}
      >
        My transactions
      </Button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <P fontSize="20px" color="#6341D1">
          Recent Transaction
        </P>
        <ContainerMenu>
          <FlexElement flexDirection="column">
            {myNewData.map((e) => (
              <div>
                <P fontSize={13}>
                  {e.transaction} <Span>Succeeded</Span>{" "}
                  <Span color={e.transaction === "CREDIT" ? "green" : "red"}>
                    {e.amount}
                  </Span>{" "}
                  <Span>{e.time}</Span>
                </P>
              </div>
            ))}
          </FlexElement>
        </ContainerMenu>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
