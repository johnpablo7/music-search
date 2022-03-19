import { useState } from "react";
import { Container, Label, Input } from "./styles";

type SearchBarProps = {
  handleSetTerm: (props: string) => void;
  searchTerm: string;
};

export const SearchBar = ({ handleSetTerm, searchTerm }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <Label>Buscar</Label>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Artistas, canciones pódcasts"
        onKeyUp={(e) => e.key === "Enter" && handleSetTerm(query)}
      />
      <button onClick={(e) => handleSetTerm(query)}>Buscar</button>
    </Container>
  );
};
