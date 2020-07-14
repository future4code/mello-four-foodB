import React, { useState, useEffect } from "react";

import "../../App.css";

import { useGetRestaurants } from "../Hooks/useGetRestaurants";

const HomePage = () => {
  const restaurants = useGetRestaurants();

  return (
    <>
      <div className="Container">
        <h3>Ifuture</h3>
        <input className="SearchInput" type="text" placeholder="Restaurante" />
        <div>
          <span className="Filter">Burguer</span>
          <span className="Filter">Asiáticas</span>
          <span className="Filter">Massas</span>
          <span className="Filter">Saud</span>
        </div>
        {restaurants.map((restaurant) => (
          <div className="Card">
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
        ))}
      </div>
    </>
  );
};

export default HomePage;
