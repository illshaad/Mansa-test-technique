import Home from "../../composants/dashboard/home/Home";

import {
  getDataUserRandom,
  getDataSiret,
  getDataAccounts,
} from "../../service/getApi";

import { screensizeInt } from "../../utils/mediaQueriesBreakpoints";
import useScreenSize from "../../hook/useScreenSize";

export default function HomeDashboard({
  userRandom,
  siretMansa,
  dataAccounts,
}) {
  const isMobile = useScreenSize().width <= screensizeInt.mobileL;
  const isTablet = useScreenSize().width <= screensizeInt.tablet;

  return (
    <Home
      user={userRandom}
      siretMansa={siretMansa}
      dataAccounts={dataAccounts}
      isMobile={isMobile}
      isTablet={isTablet}
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
