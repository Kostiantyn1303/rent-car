import { CatalogContainer } from "./Catalog.styled";
import { useEffect, useState } from "react";
import { CarCard } from "../components/CarCard/CarCard";
import CarBrandDropdown from "../components/SideBar/BrandDropDawn";
import { GetAll, GetAllFavoritesId } from "../Api";
import { CarList, ButtonLoadMore } from "./Catalog.styled";
const Catalog = () => {
  const [carsArray, setCarsArray] = useState([]);
  const [page, setPage] = useState(1);
  const [favoriesIdArray, setFavoriesIdArray] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllFavoritesId();
        if (response) setFavoriesIdArray(response.data);
      } catch (error) {
        console.error("Помилка отримання обраних об'єктів:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAll(page);
        if (response) {
          if (page === 1) setCarsArray(response.data);
          if (page > 1) setCarsArray((prev) => [...prev, ...response.data]);
        }
      } catch (error) {
        console.error("Помилка отримання всіх об'єктів:", error);
      }
    })();
  }, [page]);

  useEffect(() => {
    if (carsArray.length <= 8) return;
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  }, [carsArray]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <CatalogContainer>
      <CarBrandDropdown />
      {carsArray.length > 0 && (
        <CarList sx={{ mb: 12.5 }}>
          {carsArray.map((car) => {
            let mockapiId = null;
            const favoriteItem = favoriesIdArray.find(
              (item) => item.id === car.id
            );
            if (favoriteItem) {
              mockapiId = favoriteItem.mockapiId;
            }
            return <CarCard key={car.id} car={car} mockapiId={mockapiId} />;
          })}
        </CarList>
      )}

      {carsArray.length > 0 && carsArray.length < 40 && (
        <ButtonLoadMore type="button" onClick={handleLoadMoreClick}>
          Load more
        </ButtonLoadMore>
      )}
    </CatalogContainer>
  );
};
export default Catalog;
