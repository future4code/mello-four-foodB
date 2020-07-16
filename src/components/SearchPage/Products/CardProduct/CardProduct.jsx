import React from "react";

import ProdutoMockado from "../../../../assets/feed-home/burguer.png";
import "./CardProduct.css";

import { useGetRestaurantDetails } from "../../../Hooks/useGetRestaurantDetails";

const CardProduct = () => {
  // Meus produtos estão vindo desse custom hook;
  const products = useGetRestaurantDetails();

  //! O primeiro Componente é mockado, apagar depois
  return (
    <div>
      <div className="CardProducts">
        <img
          className="ImgProduct"
          src={ProdutoMockado}
          alt="Imagem do Produto"
        />
        <div className="CardAside">
          <div className="CardHeader">
            <span className="ProductLabel">Product</span>
            <span className="Amount">2</span>
          </div>
          <p className="ProductDescription">Description</p>
          <div className="CardFooterProducts">
            <span className="Price">R$</span>
            <button className="ButtonRemove">remover</button>
          </div>
        </div>
      </div>

      {products.map((product) => (
        <section key={product.id}>
          <h3>{product.category} </h3>
          <hr />
          <div className="CardProducts">
            <img
              className="ImgProduct"
              src={product.photoUrl}
              alt="Imagem do Produto"
            />
            <div className="CardAside">
              <div className="CardHeader">
                <span className="ProductLabel">{product.name}</span>
                <span></span>
              </div>
              <p className="ProductDescription">{product.description}</p>
              <div className="CardFooterProducts">
                <span className="Price">R${product.price.toFixed(2)}</span>
                <button className="ButtonAdd">adicionar</button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CardProduct;
