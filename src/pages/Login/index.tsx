import { Container, Title } from "./styles";

export const Login = () => {
  const loginWithSpotify = () => {
    const client_id = "7b35f3b2d2844319ba9b9a643c2a674c";
    const redirect_uri = "http://localhost:3000/callback";
    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    window.location.href = url;
  };

  return (
    <Container>
      <div>
        <Title>Bienvenido</Title>
        <button onClick={loginWithSpotify}>Acceder con Spotify</button>
      </div>
    </Container>
  );
};
