import React from "react";
import "./FeedPage.css";

import { Link } from "react-router-dom";
import { useGetRestaurants } from "../Hooks/useGetRestaurants";

const FeedPage = () => {
  const restaurants = useGetRestaurants();

  //TODO: Falta Tirar o scroll do Filtro.

  return (
    <div className="Container">
      <h3>Ifuture</h3>
      <Link to="/search">
        <input className="SearchInput" type="text" placeholder="Restaurante" />
      </Link>
      <div className="FilterCard">
        {restaurants.map((restaurant) => (
          <span key={restaurant.id} className="Filter">
            {restaurant.category}
          </span>
        ))}
      </div>

      {restaurants.map((restaurant) => (
        <Link
          to={{
            pathname: "/products",
            state: { restaurantId: restaurant.id },
          }}
        >
          <div key={restaurant.id} className="Card">
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
        </Link>
      ))}
    </div>
  );
};

export default FeedPage;
