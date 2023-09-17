import { useState } from "react";
const PriceRangeDropdown = ({ onPriceRangeChange }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  // Масив зі значеннями цін за годину оренди
  const priceOptions = [...Array(50).keys()].map((value) => value * 10);

  const handleChange = (event) => {
    const newPrice = event.target.value;
    setSelectedPrice(newPrice);
    onPriceRangeChange(newPrice); // Передаємо нове значення користувача назад до батьківського компонента
  };

  return (
    <div>
      <label htmlFor="priceRange">Ціна за годину оренди ($):</label>
      <select id="priceRange" value={selectedPrice} onChange={handleChange}>
        <option value="">Оберіть діапазон цін</option>
        {priceOptions.map((price) => (
          <option key={price} value={price}>
            {price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceRangeDropdown;
