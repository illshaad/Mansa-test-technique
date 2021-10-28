import Axios from "axios";

const getDataUserRandom = async () => {
  const { data: dataUser, status } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_RANDOM_USER}/?results=1??nat=gb`
  );
  return { dataUser, status };
};

const getDataSiret = async () => {
  const { data: dataSiret, status } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_SIRET}`
  );
  return { dataSiret, status };
};

const getDataAccounts = async () => {
  const { data: dataAccounts, status } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_ACCOUNTS}`
  );
  return { dataAccounts, status };
};

const getDataAccountsId = async (idAccount) => {
  const { data: dataAccountsId } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_ACCOUNTS}/${idAccount}/transactions?from=2018-08-13T03:24:00&to=2019-08-13T03:24:00`
  );
  return dataAccountsId;
};

export { getDataUserRandom, getDataSiret, getDataAccounts, getDataAccountsId };
