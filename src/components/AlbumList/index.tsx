import { AlbumItem } from "../AlbumItem";
import { Container, Subtitle, Wrapper } from "./styles";

type AlbumProps = {
  title: string;
  albums: any[];
};

export function AlbumList({ title, albums, ...props }: AlbumProps) {
  return (
    <Container>
      <Subtitle> {title} </Subtitle>
      <Wrapper>
        {albums.map((album) => (
          <AlbumItem
            title={album.name}
            description="Nombre del Artista"
            size="medium"
            imgSize="medium"
            imgUrl={album.images[1].url}
          />
        ))}
      </Wrapper>
    </Container>
  );
}
