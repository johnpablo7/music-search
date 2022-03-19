import { Container, Row, Column, Image } from "./styles";
import { AlbumItem } from "../../components/AlbumItem";
import { TrackItems } from "../../components/TrackItems";
import GoBack from "../../assets/images/back.png";

export const TrackDetails = () => {
  return (
    <Container>
      <Row>
        <h2>
          <Image src={GoBack} alt="back" /> Volver
        </h2>
      </Row>

      <Column>
        <AlbumItem
          title="Nombre del Álbum"
          description="Nombre del Artista"
          size="large"
          imgSize="large"
        />
        <TrackItems />
      </Column>
    </Container>
  );
};
