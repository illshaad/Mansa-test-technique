import axios from "axios";
import mockAxios from "axios";
import {
  getDataUserRandom,
  getDataSiret,
  getDataAccounts,
  getDataAccountsId,
} from "./getApi";

jest.mock("axios");

mockAxios.get.mockResolvedValue(() => {
  Promise.resolve({
    results: [
      {
        name: "jean",
        last: "mimi",
        title: "mrs",
      },
    ],
  });
});

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const result = await getDataUserRandom();
    console.log(result);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    // expect(result).toBe({ name: "jean", last: "mimi", title: "mrs" });
  });

  //   it("fetches erroneously data from an API", async () => {
  //     const errorMessage = "Network Error";
  //     moc.get.mockImplementationOnce(() =>
  //       Promise.reject(new Error(errorMessage))
  //     );
  //     await expect(getDataUserRandom()).rejects.toThrow(errorMessage);
  //   });
});
