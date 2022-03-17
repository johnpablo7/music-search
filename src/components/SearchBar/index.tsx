import { Container, Label, Input } from "./styles";

export const SearchBar = () => {
  return (
    <Container>
      <Label>Buscar</Label>
      <Input placeholder="Artistas, canciones pódcasts" />
    </Container>
  );
};
