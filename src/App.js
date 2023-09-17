import "./App.css";
import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/Favorites";
import NotFound from "./pages/HomePage copy";
import { MainContainer } from "./App.styled";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
