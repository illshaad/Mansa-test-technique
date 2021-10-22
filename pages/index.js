import Connexion from "../composant/connexion/Connexion";

import { getDataUserRandom } from "../service/getApi";

export default function Home({ userRandom }) {
  return <Connexion user={userRandom} />;
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
