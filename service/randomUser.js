import Axios from "axios";

const getDataUserRandom = async () => {
  const { data: dataUser } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_RANDOM_USER}/?results=1`
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

export { getDataUserRandom, getDataSiret, getDataAccounts };
