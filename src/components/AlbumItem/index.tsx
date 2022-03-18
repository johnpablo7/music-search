import { Container, Title, Description, Image } from "./styles";

type AlbumItemProps = {
  size: string;
  title: string;
  description: string;
  imgSize: string;
};

export function AlbumItem({
  size,
  title,
  description,
  imgSize,
}: AlbumItemProps) {
  return (
    <Container size={size}>
      <Image imgSize={imgSize} src="https://via.placeholder.com/160/170" />
      <Title> {title} </Title>
      <Description> {description} </Description>
    </Container>
  );
}
