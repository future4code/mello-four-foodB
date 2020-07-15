import React, { useState } from "react";
import "../../App.css";

import { useGetRestaurants } from "../Hooks/useGetRestaurants";

const SearchPage = () => {
  const [inputedValue, setInputedValue] = useState("");
  const restaurants = useGetRestaurants();

  const handleInputChange = (event) => {
    setInputedValue(event.target.value);
  };

  const searchedRestaurant = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(inputedValue)
  );
  console.log(searchedRestaurant);

  //TODO: Falta implementar o Filtro por categoria.

  return (
    <div>
      <div className="Container">
        <h3>Busca</h3>
        <input
          className="SearchInput"
          type="text"
          autoFocus
          onChange={handleInputChange}
        />

        {inputedValue === "" ? (
          <p>Busque por nome de restaurante</p>
        ) : inputedValue.includes(searchedRestaurant) ? (
          <p>Não encontrado</p>
        ) : (
          searchedRestaurant.map((restaurant, index) => (
            <div key={index} className="Card">
              <img src={restaurant.logoUrl} alt="Imagem do card" />
              <div>
                <p className="Restaurant">{restaurant.name}</p>
                <div className="CardFooter">
                  <span className="Time-to-deliver">
                    {restaurant.deliveryTime} - {restaurant.deliveryTime + 20}{" "}
                    min
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
    </div>
  );
};

export default SearchPage;
