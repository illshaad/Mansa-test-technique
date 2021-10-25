import Menu from "./Menu";
import { Logo } from "../connexion/Connexion.style";
import { FlexComponent } from "./index.style";
import Information from "./Information";
import { useRouter } from "next/router";
import { device, screensizeInt } from "../../styles/mediaQueriesBreakpoints";
import useScreenSize from "../../hook/useScreenSize";

export default function Home({ siretMansa, dataAccounts }) {
  const isTablet = useScreenSize().width <= screensizeInt.tablet;
  const { denomination } = siretMansa.unite_legale;
  const { siret, geo_adresse } = siretMansa.unite_legale.etablissement_siege;
  const router = useRouter();
  const { first, last, title, picture } = router.query;

  const formatData = dataAccounts.map((e) => {
    return {
      accountId: e.account_id,
      accountNumber: e.account_number,
      current: e.current,
      currency: e.currency,
    };
  });

  return (
    <FlexComponent
      gap="4%"
      backgroundColor="#f5f5f7"
      flexDirection={isTablet ? "column" : null}
    >
      <Menu first={first} last={last} title={title} picture={picture} />
      <Information
        first={first}
        denomination={denomination}
        siret={siret}
        geo_adresse={geo_adresse}
        newData={formatData}
      />
    </FlexComponent>
  );
}
