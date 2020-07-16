import React from "react";

import "./ProductPage.css";

import CardProduct from "./CardProduct/CardProduct";
import logoUrl from "../../../assets/feed-home/image.jpg";

import { useGetRestaurants } from "../../Hooks/useGetRestaurants";

const ProductsPage = (props) => {
  const restaurants = useGetRestaurants();

  const restaurantPerId = restaurants.filter((restaurant) => {
    return restaurant.id === "2";
  });

  console.log(restaurantPerId);

  return (
    <div className="Container">
      {restaurantPerId.map((restaurant) => (
        <div key={restaurant.id} className="Card">
          <img src={restaurant.logoUrl} alt="Imagem do Produto" />
          <div>
            <p className="Restaurant">{restaurant.name}</p>
            <p className="ResDescription">{restaurant.description}</p>
            <div className="CardFooter">
              <span className="Time-to-deliver">
                {restaurant.deliveryTime} - {restaurant.deliveryTime + 20} min
              </span>
              <span className="Shipping-fee">
                Frete R${restaurant.shipping.toFixed(2)}
              </span>
            </div>
            <p className="Address">{restaurant.address}</p>
          </div>
        </div>
      ))}

      <CardProduct />
    </div>
  );
};

export default ProductsPage;
