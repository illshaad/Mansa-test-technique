import Axios from "axios";

const getDataUserRandom = async () => {
  const { data: dataUser } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_RANDOM_USER}/?results=1??nat=gb`
  );

  return dataUser;
};

const getDataSiret = async () => {
  const { data: dataSiret } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_SIRET}`
  );
  return dataSiret;
};

const getDataAccounts = async () => {
  const { data: dataAccounts } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_ACCOUNTS}`
  );
  return dataAccounts;
};

const getDataAccountsId = async (idAccount) => {
  const { data: dataAccountsId } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_ACCOUNTS}/${idAccount}/transactions?from=2018-08-13T03:24:00&to=2019-08-13T03:24:00`
  );
  return dataAccountsId;
};

export { getDataUserRandom, getDataSiret, getDataAccounts, getDataAccountsId };
