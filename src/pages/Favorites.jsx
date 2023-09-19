//

import { useState, useEffect } from "react";
import CarCard from "../components/CarCard/CarCard";
import { Section, CarList, LoadMoreButton } from "./Favorites.styled";
import { useGetAllFavoritesQuery } from "../Api";

const Favorites = () => {
  const { data, error, isLoading } = useGetAllFavoritesQuery();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Section>
      <CarList sx={{ mb: 12.5 }}>
        {data?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </CarList>
    </Section>
  );
};

export default Favorites;
