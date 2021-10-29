import {
  getDataUserRandom,
  getDataSiret,
  getDataAccounts,
  getDataAccountsId,
} from "./getApi";

describe("fetchData userRandom", () => {
  it("fetches successfully data from an API", async () => {
    const data = await getDataUserRandom();
    const checkStatus = data.status;
    const property = data.dataUser.results[0];
    expect(checkStatus).toEqual(200);
    expect(data).toHaveProperty("dataUser");
    expect(property).toHaveProperty("name");
  });
});

describe("fetchData api siret from entreprise data gouv", () => {
  it("fetches successfully data from an API", async () => {
    const data = await getDataSiret();
    const checkStatus = data.status;
    const { siren, geo_adresse } =
      data.dataSiret.unite_legale.etablissements[0];
    const { denomination } = data.dataSiret.unite_legale;
    expect(checkStatus).toEqual(200);
    expect(data).toHaveProperty("dataSiret");
    expect(geo_adresse).toEqual("112 Avenue de Paris 94300 Vincennes");
    expect(siren).toEqual("852379890");
    expect(denomination).toEqual("MANSA GROUP");
  });
});

describe("fetchData api accounts", () => {
  it("fetches successfully data from an API", async () => {
    const { dataAccounts } = await getDataAccounts();

    const checkMultipProperty = dataAccounts.map((e) => {
      expect(e).toHaveProperty("account_id");
      expect(e).toHaveProperty("current");
      expect(e).toHaveProperty("currency");
      return {
        account_id: e.account_id,
        current: e.current,
        currency: e.currency,
      };
    });
    const checkTypeData = checkMultipProperty.map((e) => {
      expect(typeof e.account_id && typeof e.currency).toBe("string");
      expect(typeof e.current).toEqual("number");
      return { ...e };
    });
  });
});
