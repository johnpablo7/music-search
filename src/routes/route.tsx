import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

type Props = {
  component: ReactElement;
  authenticated?: boolean;
  notAuthenticated?: boolean;
};

export const AppRoute: FC<Props> = ({
  authenticated,
  notAuthenticated,
  component,
}) => {
  const { auth } = useAuth();

  if (authenticated && !auth) {
    return <Navigate to="/login" />;
  }

  if (notAuthenticated && auth) {
    return <Navigate to="/" />;
  }

  return component;
};
