import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumList } from "../../components/AlbumList";
import { SearchBar } from "../../components/SearchBar";
import { axiosSpotify } from "../../utils/axiosSpotify";
import { Container } from "./styles";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tracks, setTracks] = useState<any[]>([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 20;

  const handleSetTerm = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  useEffect(() => {
    if (!searchTerm) return;
    setLoading(true);
    axiosSpotify
      .get("/v1/search", {
        params: {
          q: "track:" + searchTerm,
          type: "track,album",
          offset: (page - 1) * 20,
          limit: perPage,
        },
      })
      .then((response) => {
        const maxTotal = Math.max(
          response.data.tracks.total,
          response.data.albums.total
        );
        setTotalPages(Math.ceil(maxTotal / perPage));
        setTracks(response.data.tracks.items);
        setAlbums(response.data.albums.items);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("Error desconocido");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm, page]);

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} handleSetTerm={handleSetTerm} />
      {loading ? (
        <>Loading...</>
      ) : error ? (
        <>{error}</>
      ) : (
        <>
          {!!albums.length && (
            <AlbumList
              title={`Albums encontrados para "${searchTerm}"`}
              albums={albums}
            />
          )}
          {!!tracks.length && (
            <div>
              <p>Canciones encontradas para "{searchTerm}"</p>
              <ul>
                {tracks.map((track) => (
                  <li key={track.id}>
                    <Link to={"/track/" + track.id}>
                      {track.name} - {track.artists[0].name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                {Array(totalPages)
                  .fill(0)
                  .map((_, i) => (
                    <button
                      key={i}
                      style={{
                        fontWeight: "bold",
                        color: i + 1 === page ? "black" : "var(--tertiary)",
                        fontSize: 18,
                        padding: 4,
                      }}
                      onClick={(e) => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};
