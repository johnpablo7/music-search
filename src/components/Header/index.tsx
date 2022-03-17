import { Container, Image } from "./styles";
import Logo from "../../assets/images/logoSpotify.png";

export const Header = () => {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
    </Container>
  );
};
