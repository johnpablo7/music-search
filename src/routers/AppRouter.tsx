import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListTrack } from "../pages/ListTrack";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-track" element={<ListTrack />} />
      </Routes>
    </Router>
  );
};
