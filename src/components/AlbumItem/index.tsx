import { Container, Title, Description, Image } from "./styles";

export function AlbumItem() {
  return (
    <Container>
      <Image src="https://via.placeholder.com/160/170" />
      <Title>Nombre del Álbum</Title>
      <Description>Nombre del Artista</Description>
    </Container>
  );
}
