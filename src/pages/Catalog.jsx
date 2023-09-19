import { CatalogContainer } from "./Catalog.styled";
import { useState, useEffect } from "react";
import CarCard from "../components/CarCard/CarCard";
import CarBrandDropdown from "../components/SideBar/BrandDropDawn";
import { CarList, ButtonLoadMore } from "./Catalog.styled";
import { useGetAllQuery } from "../Api";

const ITEMS_PER_PAGE = 8;

const Catalog = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllQuery(page, {
    refetchOnMountOrArgChange: true,
  });

  const [loadedCars, setLoadedCars] = useState([]);
  const [hasMoreCars, setHasMoreCars] = useState(true);

  useEffect(() => {
    if (data) {
      setLoadedCars((prevCars) => [...prevCars, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.length < ITEMS_PER_PAGE) {
      setHasMoreCars(false);
    } else {
      setHasMoreCars(true);
    }
  }, [data, page]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading && !loadedCars.length) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <CatalogContainer>
      <CarBrandDropdown />
      <CarList sx={{ mb: 12.5 }}>
        {loadedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </CarList>

      {hasMoreCars && (
        <ButtonLoadMore type="button" onClick={handleLoadMoreClick}>
          Load more
        </ButtonLoadMore>
      )}
    </CatalogContainer>
  );
};

export default Catalog;
