import axios from "axios";
import mockAxios from "axios";
import {
  getDataUserRandom,
  getDataSiret,
  getDataAccounts,
  getDataAccountsId,
} from "./getApi";

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const res = await getDataUserRandom();
    const toto = res.results[0];
    console.log(toto);
    expect(toto).toHaveProperty("name");
  });
});
