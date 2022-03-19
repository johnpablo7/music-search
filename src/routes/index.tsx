import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { TrackDetails } from "../pages/TrackDetails";
import { AppRoute } from "./route";
import { Callback } from "../pages/Callback";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<AppRoute notAuthenticated component={<Login />} />}
        />
        <Route
          path="/"
          element={<AppRoute authenticated component={<Home />} />}
        />
        <Route
          path="/track/:id"
          element={<AppRoute authenticated component={<TrackDetails />} />}
        />
        <Route
          path="/callback"
          element={<AppRoute notAuthenticated component={<Callback />} />}
        />
      </Routes>
    </Router>
  );
};
