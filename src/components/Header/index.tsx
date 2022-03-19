import { Container, Image } from "./styles";
import Logo from "../../assets/images/logoSpotify.png";
import { useAuth } from "../../context/auth";

export const Header = () => {
  const { auth, logout } = useAuth();

  return (
    <Container>
      <Image src={Logo} alt="Logo" />
      <div>{auth && <button onClick={logout}>Salir</button>}</div>
    </Container>
  );
};
