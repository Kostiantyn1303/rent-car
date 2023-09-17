import "./App.css";
import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/SharedLayout/Layout";

import { MainContainer } from "./App.styled";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </MainContainer>
  );
}

export default App;
