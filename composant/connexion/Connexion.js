import {
  Card,
  ComponentImage,
  ImageElement,
  P,
  Name,
  Logo,
} from "./Connexion.style";

export default function Connexion() {
  return (
    <>
      <Logo>Mansa</Logo>
      <Card>
        <ComponentImage>
          <ImageElement
            img
            src="/media/cc0-images/grapefruit-slice-332-332.jpg"
          />
        </ComponentImage>
        <P>Hi, My name is</P>
        <Name>Shadd</Name>
        <button>Acceder à mon ....</button>
      </Card>
    </>
  );
}
