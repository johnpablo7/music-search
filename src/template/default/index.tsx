import { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";

type ReactProps = {
  children: ReactNode;
};

export const Default = ({ children }: ReactProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
