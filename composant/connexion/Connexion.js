import { useRouter } from "next/router";

import {
  Card,
  ComponentImage,
  ImageElement,
  P,
  Name,
  Button,
  Logo,
} from "./Connexion.style";

export default function Connexion({ user }) {
  const router = useRouter();
  const { name } = user.results[0];
  const { first, last, title } = name;
  const picture = user.results[0].picture.large;

  return (
    <>
      <header>
        <Logo fontSize="30px" marginLeft="30px" paddingTop="30px">
          Mansa
        </Logo>
      </header>
      <Card>
        <ComponentImage>
          <ImageElement img src={picture} alt="image" />
        </ComponentImage>
        <P>Hi, My name is</P>
        <Name>
          {first} {last}
        </Name>
        <Button
          cursor={"pointer"}
          onClick={() =>
            router.push(
              `/dashboard?title=${title}&first=${first}&last=${last}&picture=${picture}`
            )
          }
        >
          My dashboard
        </Button>
      </Card>
    </>
  );
}
