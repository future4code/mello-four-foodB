import React, { useState } from "react";
import "./SearchPage.css";

import { useGetRestaurants } from "../Hooks/useGetRestaurants";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const restaurants = useGetRestaurants();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const searchedRestaurant = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(inputValue)
  );
  console.log(searchedRestaurant);

  return (
    <div className="Container">
      <h3>Busca</h3>
      <input
        placeholder="Restaurante"
        className="SearchInput"
        type="text"
        autoFocus
        onChange={handleInputChange}
      />

      {inputValue === "" ? (
        <span>Busque por nome de restaurante</span>
      ) : inputValue.includes(searchedRestaurant) ? (
        <span>Não encontramos :(</span>
      ) : (
        searchedRestaurant.map((restaurant, index) => (
          <div key={index} className="Card">
            <img src={restaurant.logoUrl} alt="Imagem do card" />
            <div>
              <p className="Restaurant">{restaurant.name}</p>
              <div className="CardFooter">
                <span className="Time-to-deliver">
                  {restaurant.deliveryTime} - {restaurant.deliveryTime + 20} min
                </span>
                <span className="Shipping-fee">
                  Frete R${restaurant.shipping.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchPage;
