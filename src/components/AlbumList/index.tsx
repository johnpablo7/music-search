import { AlbumItem } from "../AlbumItem";
import { Container, Subtitle, Wrapper } from "./styles";

type AlbumProps = {
  title: string;
};

export function AlbumList({ title, ...props }: AlbumProps) {
  return (
    <Container>
      <Subtitle> {title} </Subtitle>
      <Wrapper>
        <AlbumItem
          title="Nombre del Álbum"
          description="Nombre del Artista"
          size="medium"
          imgSize="medium"
        />
        <AlbumItem
          title="Nombre del Álbum"
          description="Nombre del Artista"
          size="medium"
          imgSize="medium"
        />
        <AlbumItem
          title="Nombre del Álbum"
          description="Nombre del Artista"
          size="medium"
          imgSize="medium"
        />
        <AlbumItem
          title="Nombre del Álbum"
          description="Nombre del Artista"
          size="medium"
          imgSize="medium"
        />
      </Wrapper>
    </Container>
  );
}
