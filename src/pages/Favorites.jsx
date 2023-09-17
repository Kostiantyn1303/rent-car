import { useEffect, useState } from "react";

import { CarCard } from "../components/CarCard/CarCard";
import {
  CarList,
  CarListWrap,
  LoadMoreButton,
  Section,
} from "./Favorites.styled";
import { GetAll, GetAllFavoritesId } from "../Api";

const LIMIT = 8;

export const FavoritesPage = () => {
  const [page, setPage] = useState(1);
  const [favoriesIdArray, setFavoriesIdArray] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllFavoritesId();
        if (response) setFavoriesIdArray(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Section>
        <CarListWrap>
          <CarList sx={{ mb: 12.5 }}>
            {favoriesIdArray.map((car) => {
              let mockapiId = null;
              const favoriteItem = favoriesIdArray.find(
                (item) => item.id === car.id
              );
              if (favoriteItem) {
                mockapiId = favoriteItem.mockapiId;
              }
              return (
                <li key={car.id}>
                  <CarCard car={car} mockapiId={mockapiId} />
                </li>
              );
            })}
          </CarList>
        </CarListWrap>

        {/* {paginationArray.length > 0 &&
          paginationArray.length < filteredCarsArray.length && (
            <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
              Load more
            </LoadMoreButton>
          )} */}
      </Section>
    </>
  );
};
export default FavoritesPage;
