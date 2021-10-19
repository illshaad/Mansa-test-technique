import { useRouter } from "next/router";

import {
  Card,
  ComponentImage,
  ImageElement,
  P,
  Name,
  Logo,
  Button,
} from "./Connexion.style";

export default function Connexion({ user }) {
  const router = useRouter();
  const { name } = user.results[0];
  const { first, last } = name;
  const picture = user.results[0].picture.large;

  return (
    <>
      <Logo>Mansa</Logo>
      <Card>
        <ComponentImage>
          <ImageElement img src={picture} alt="image" />
        </ComponentImage>
        <P>Hi, My name is</P>
        <Name>
          {first} {last}
        </Name>
        <Button onClick={() => router.push("/dashboard")}>My dashbord </Button>
      </Card>
    </>
  );
}
