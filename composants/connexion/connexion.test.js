import React from "react";
import { render, screen } from "@testing-library/react";
import Connexion from "./Connexion";

describe("check .env", () => {
  it("should render environement file", () => {
    const envUser = process.env.NEXT_PUBLIC_URL_RANDOM_USER;
    const envSiret = process.env.NEXT_PUBLIC_URL_SIRET;
    const envAccounts = process.env.NEXT_PUBLIC_URL_ACCOUNTS;
    expect(envUser && envSiret && envAccounts).toBeDefined();
  });

  describe("test api randomuser ", () => {
    const user = {
      dataUser: {
        results: [
          {
            name: {
              first: "jean",
              last: "marc",
              title: "mr",
            },
            picture: {
              large: `https://randomuser.me/api/portraits/women/28.jpg`,
            },
          },
        ],
      },
    };
    it("should render logo text", () => {
      render(<Connexion user={user} />);
      const logo = screen.getByText("Mansa");
      expect(logo).toBeInTheDocument();
    });
    it("should render first and last string", () => {
      render(<Connexion user={user} />);
      const information = screen.getByText(
        user.dataUser.results[0].name.first +
          " " +
          user.dataUser.results[0].name.last
      );
      expect(information).toBeInTheDocument();
    });
    it("should render button string", () => {
      render(<Connexion user={user} />);
      const nameButton = screen.getByText("My dashboard");
      expect(nameButton).toBeInTheDocument();
    });
    // it("should render name button and redirects correctly", () => {
    //   render(<Connexion user={user} />);
    //   const nameLink = screen.getByText("My dashboard");
    //   expect(nameLink.closest("link")).toHaveAttribute(
    //     "href",
    //     `/dashboard?title=${user.results[0].name.title}&first=${user.results[0].name.first}&last=${user.results[0].name.last}&picture=${user.results[0].picture.large}`
    //   );
    // });
  });
});
