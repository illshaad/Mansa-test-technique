import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
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

  const redirects = (title, first, last, picture) => {
    return router.push(
      `/dashboard?title=${title}&first=${first}&last=${last}&picture=${picture}`
    );
  };

  return (
    <Container>
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
          onClick={() => redirects(title, first, last, picture)}
          href={`/dashboard?title=${title}&first=${first}&last=${last}&picture=${picture}`}
        >
          My dashboard
        </Button>
      </Card>
    </Container>
  );
}
