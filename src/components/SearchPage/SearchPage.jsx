import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";

import FoodImage from "../../assets/image.jpg";
import "../../App.css";

const SearchPage = () => {
  const [details, setDetails] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRMTGRGN0ZSR1ZCYjZRZks0dDJzIiwibmFtZSI6Ikthc3Bhcm92IiwiZW1haWwiOiJrYXNwYXJvdkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBDaGVzcywgMTcxLCBBIC0gQ2hlZWt5IEJyZWVrIiwiaWF0IjoxNTk0NjgyODQ0fQ.24bewsoHPv3dKl0C8OD5uAPpPCVbQVLNNLlBB9TemoE";

  const restaurantId = 8;

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const getRestaurantsDetails = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${restaurantId}
      `,
        axiosConfig
      )
      .then((response) => {
        setDetails(response.data.restaurant.products);
        console.log(response.data.restaurant.products);
      });
  };

  useEffect(() => {
    getRestaurantsDetails();
  },[]);

  return (
    <div>
      <div className="Container">
        <h3>Busca</h3>
        <input className="SearchInput" type="text" />
        <div className="Card">
          <img src={FoodImage} alt="Imagem do card" />
          <div>
            <p className="Restaurant">Nome do restaurante</p>
            <div className="CardFooter">
              <span className="Time-to-deliver">Tempo de entrega</span>
              <span className="Shipping-fee">Frete</span>
            </div>
          </div>
        </div>
        <div className="Card">
          <img src={FoodImage} alt="Imagem do card" />
          <div>
            <p className="Restaurant">Nome do restaurante</p>
            <div className="CardFooter">
              <span className="Time-to-deliver">Tempo de entrega</span>
              <span className="Shipping-fee">Frete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
