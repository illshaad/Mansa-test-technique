import Menu from "../menu/Menu";
import { FlexComponent } from "../index.style";
import Information from "../information/Information";
import { useRouter } from "next/router";

export default function Home({ siretMansa, dataAccounts, isTablet, isMobile }) {
  const { denomination } = siretMansa.dataSiret.unite_legale;
  const { siret, geo_adresse } =
    siretMansa.dataSiret.unite_legale.etablissement_siege;
  const router = useRouter();
  const { first, last, title, picture } = router.query;

  const formatData = dataAccounts.dataAccounts.map((e) => {
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
      <Menu
        first={first}
        last={last}
        title={title}
        picture={picture}
        isTablet={isTablet}
        isMobile={isMobile}
      />
      <Information
        first={first}
        denomination={denomination}
        siret={siret}
        geo_adresse={geo_adresse}
        newData={formatData}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </FlexComponent>
  );
}
