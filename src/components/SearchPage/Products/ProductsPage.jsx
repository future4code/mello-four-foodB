import React from "react";

import logoUrl from "../../../assets/feed-home/image.jpg";
import photoUrl from "../../../assets/feed-home/mao-santa-burguer-1531851949973-v-2-900-x-506.png";

/* 
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRMTGRGN0ZSR1ZCYjZRZks0dDJzIiwibmFtZSI6Ikthc3Bhcm92IiwiZW1haWwiOiJrYXNwYXJvdkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBDaGVzcywgMTcxLCBBIC0gQ2hlZWt5IEJyZWVrIiwiaWF0IjoxNTk0NjgyODQ0fQ.24bewsoHPv3dKl0C8OD5uAPpPCVbQVLNNLlBB9TemoE";

  const restaurantId = 8;

  const axiosConfig = {
    headers: {
      auth: token,
    },
  }; */

const ProductsPage = () => {
  return (
    <div className="Container">
      <h1>Produtos aqui</h1>
      {/* {restaurants.map((restaurant) => (
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
      ))} */}

      <div className="Card">
        <img src={logoUrl} alt="Imagem do Produto" />
        <div>
          <p className="Restaurant">Restaurante</p>
          <p className="Description">Description</p>
          <div className="CardFooter">
            <span className="Time-to-deliver">min</span>
            <span className="Shipping-fee">Frete R$</span>
          </div>
          <p className="Address">Address</p>
        </div>
      </div>

      <div className="CardProducts">
        <img className="ImgProduct" src={photoUrl} alt="Imagem do Produto" />
        <div className="CardAside">
          <p className="Restaurant">Restaurante</p>
          <p className="ProductDescription">Description</p>
          <div className="CardFooterProducts">
            <span className="Price">R$</span>
            <button className="ButtonAdd">adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
