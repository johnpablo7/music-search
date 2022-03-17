import { ReactNode } from "react";
import { Container } from "./styles";

type ReactProps = {
  children: ReactNode;
};

export const Default = ({ children }: ReactProps) => {
  return <Container>{children}</Container>;
};
