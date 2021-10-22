import Home from "../../composant/dashboard/Home";

import {
  getDataUserRandom,
  getDataSiret,
  getDataAccounts,
} from "../../service/getApi";

export default function HomeDashboard({
  userRandom,
  siretMansa,
  dataAccounts,
}) {
  return (
    <Home
      user={userRandom}
      siretMansa={siretMansa}
      dataAccounts={dataAccounts}
    />
  );
}

export async function getStaticProps() {
  const userRandom = await getDataUserRandom();
  const siretMansa = await getDataSiret();
  const dataAccounts = await getDataAccounts();

  return {
    revalidate: 1,
    props: {
      userRandom,
      siretMansa,
      dataAccounts,
    },
  };
}
