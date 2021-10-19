import Header from "../../composant/connexion/Dashboard/Header";
import { getDataUserRandom } from "../../service/randomUser";

export default function HomeDashboard({ userRandom }) {
  return <Header user={userRandom} />;
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
