import "./App.css";
import { Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/HomePage copy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
