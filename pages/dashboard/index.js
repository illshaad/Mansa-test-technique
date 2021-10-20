import Header from "../../composant/dashboard/Header";

import {
  getDataUserRandom,
  getDataSiret,
  getDataAccounts,
} from "../../service/randomUser";

export default function HomeDashboard({
  userRandom,
  siretMansa,
  dataAccounts,
}) {
  return (
    <Header
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
