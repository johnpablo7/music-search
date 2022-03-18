import { Container, Label, Input } from "./styles";

type SearchBarProps = {
  handleSetTerm: (props: string) => void;
  searchTerm: string | undefined;
};

export const SearchBar = ({ handleSetTerm, searchTerm }: SearchBarProps) => {
  return (
    <Container>
      <Label>Buscar</Label>
      <Input
        onChange={(e) => handleSetTerm(e.target.value)}
        value={searchTerm}
        placeholder="Artistas, canciones pódcasts"
      />
    </Container>
  );
};
