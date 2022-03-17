import { AlbumItem } from "../AlbumItem";
import { Container, Subtitle, Wrapper } from "./styles";

export function AlbumList() {
  return (
    <Container>
      <Subtitle>Búsquedas recientes</Subtitle>
      <Wrapper>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </Wrapper>
    </Container>
  );
}
