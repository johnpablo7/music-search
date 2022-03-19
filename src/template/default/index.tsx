import { ReactNode, useEffect } from "react";
import { Header } from "../../components/Header";
import { useAuth } from "../../context/auth";
import { setAxiosAuth } from "../../utils/axiosSpotify";
import { Container } from "./styles";

type ReactProps = {
  children: ReactNode;
};

export const Default = ({ children }: ReactProps) => {
  const { auth } = useAuth();

  useEffect(() => {
    setAxiosAuth(auth);
  }, [auth]);

  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
