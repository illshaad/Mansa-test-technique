import Axios from "axios";

const getDataUserRandom = async () => {
  console.log("process", process.env);
  const { data: dataUser } = await Axios.get(
    `${process.env.NEXT_PUBLIC_URL_RANDOM_USER}/?results=1`
  );
  return dataUser;
};

export { getDataUserRandom };
