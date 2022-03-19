import { Container, Row, Column, Image } from "./styles";
import { AlbumItem } from "../../components/AlbumItem";
import { TrackItems } from "../../components/TrackItems";
import GoBack from "../../assets/images/back.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosSpotify } from "../../utils/axiosSpotify";
import { Link } from "react-router-dom";

export const TrackDetails = () => {
  const params = useParams();
  const [track, setTrack] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axiosSpotify
      .get("/v1/tracks/" + params.id)
      .then((response) => {
        setTrack(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  return (
    <Container>
      <Row>
        <h2>
          <Link to={"/"}>
            <Image src={GoBack} alt="back" /> Volver
          </Link>
        </h2>
      </Row>

      {loading ? (
        "cargando..."
      ) : error ? (
        error
      ) : !track ? (
        "No se encontró"
      ) : (
        <div>
          <Column>
            <AlbumItem
              title={track.album.name}
              description={track.artists[0].name}
              size="large"
              imgSize="large"
              imgUrl={track.album.images[1].url}
            />
            <TrackItems />
          </Column>
        </div>
      )}
    </Container>
  );
};
