import { Container, Title, Description, Image } from "./styles";

type AlbumItemProps = {
  size: string;
  title: string;
  description: string;
  imgSize: string;
  imgUrl: string;
};

export function AlbumItem({
  size,
  title,
  description,
  imgSize,
  imgUrl,
}: AlbumItemProps) {
  return (
    <Container size={size}>
      <Image imgSize={imgSize} src={imgUrl} />
      <Title> {title} </Title>
      <Description> {description} </Description>
    </Container>
  );
}
