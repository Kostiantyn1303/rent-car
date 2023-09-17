import React, { useState } from "react";

import { DropDawnLabel, CustomSelect } from "./BrandDropDawn.styled";

const carBrands = [
  { value: "bmw", label: "BMW" },
  { value: "audi", label: "Audi" },
  { value: "mercedes", label: "Mercedes-Benz" },
  { value: "toyota", label: "Toyota" },
  { value: "buick", label: "Buick" },
  { value: "volvo", label: "Volvo" },
  { value: "hummer", label: "HUMMER" },
  { value: "subaru", label: "Subaru" },
  { value: "mitsubishi", label: "Mitsubishi" },
  { value: "nissan", label: "Nissan" },
  { value: "lincoln", label: "Lincoln" },
  { value: "gmc", label: "GMC" },
  { value: "hyundai", label: "Hyundai" },
  { value: "mini", label: "MINI" },
  { value: "bentley", label: "Bentley" },
  { value: "aston-martin", label: "Aston Martin" },
  { value: "pontiac", label: "Pontiac" },
  { value: "lamborghini", label: "Lamborghini" },
  { value: "chevrolet", label: "Chevrolet" },
  { value: "mercedes-benz", label: "Mercedes-Benz" },
  { value: "chrysler", label: "Chrysler" },
  { value: "kia", label: "Kia" },
  { value: "land", label: "Land" },
];

const CarBrandDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <DropDawnLabel>Car brand</DropDawnLabel>
      <CustomSelect
        value={selectedOption}
        onChange={handleChange}
        options={carBrands}
        placeholder="Enter the text"
      />
    </>
  );
};

export default CarBrandDropdown;
