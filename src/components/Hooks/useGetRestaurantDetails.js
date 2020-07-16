import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useGetRestaurantDetails = () => {
  const [products, setProducts] = useState([]);
  let { restaurantId } = useParams();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRMTGRGN0ZSR1ZCYjZRZks0dDJzIiwibmFtZSI6Ikthc3Bhcm92IiwiZW1haWwiOiJrYXNwYXJvdkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBDaGVzcywgMTcxLCBBIC0gQ2hlZWt5IEJyZWVrIiwiaWF0IjoxNTk0NjgyODQ0fQ.24bewsoHPv3dKl0C8OD5uAPpPCVbQVLNNLlBB9TemoE";

  restaurantId = 3;
  //console.log(`Id do restaurante: ${restaurantId}`);

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const getRestaurantDetails = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${restaurantId}`,
        axiosConfig
      )
      .then((response) => {
        setProducts(response.data.restaurant.products);
        //console.log(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//! Toda vez que salvo o getRestaurants entra como Dependency automaticamente.
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return products;
};
