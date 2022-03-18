import { useState } from "react";
import { AlbumList } from "../../components/AlbumList";
import { SearchBar } from "../../components/SearchBar";
import { Container } from "./styles";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSetTerm = (value: string) => {
    // console.log(value);
    setSearchTerm(value);
  };
  return (
    <Container>
      <SearchBar searchTerm={searchTerm} handleSetTerm={handleSetTerm} />
      <AlbumList
        title={
          searchTerm
            ? `Resultados encontrados para "${searchTerm}"`
            : "Búsquedas recientes"
        }
      />
      {!searchTerm && <AlbumList title="Búsquedas recientes" />}
    </Container>
  );
};
