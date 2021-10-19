import Dashboard from "../../composant/connexion/Dashboard/Dashboard";
import { getDataUserRandom } from "../../service/randomUser";

export default function HomeDashboard() {
  return <Dashboard />;
}

export async function getStaticProps() {
  const userRandom = await getDataUserRandom();
  return {
    revalidate: 1,
    props: {
      userRandom,
    },
  };
}
