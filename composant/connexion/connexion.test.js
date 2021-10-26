import React from "react";
import { render, screen } from "@testing-library/react";
import Connexion from "./Connexion";

describe("check .env", () => {
  it("should render environement file", () => {
    const env = process.env.NEXT_PUBLIC_URL_RANDOM_USER;
    expect(env).toBeDefined();
  });

  describe("test api randomuser ", () => {
    const user = {
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
    };
    it("should render logo text", () => {
      render(<Connexion user={user} />);
      const logo = screen.getByText("Mansa");
      expect(logo).toBeInTheDocument();
    });
    it("should render first and last string", () => {
      render(<Connexion user={user} />);
      const information = screen.getByText(
        user.results[0].name.first + " " + user.results[0].name.last
      );
      expect(information).toBeInTheDocument();
    });
    it("should render name button and redirection", () => {
      render(<Connexion user={user} />);
      expect(screen.getByText("My dashboard").href).toBe(
        `/dashboard?title=${user.results[0].name.title}&first=${user.results[0].name.first}&last=${user.results[0].name.last}&picture=${user.results[0].picture}`
      );
    });
  });
});
