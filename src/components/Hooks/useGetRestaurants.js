import { useState, useEffect } from "react";
import axios from "axios";

export const useGetRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRMTGRGN0ZSR1ZCYjZRZks0dDJzIiwibmFtZSI6Ikthc3Bhcm92IiwiZW1haWwiOiJrYXNwYXJvdkBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMTExLjExMS0xMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBDaGVzcywgMTcxLCBBIC0gQ2hlZWt5IEJyZWVrIiwiaWF0IjoxNTk0NjgyODQ0fQ.24bewsoHPv3dKl0C8OD5uAPpPCVbQVLNNLlBB9TemoE";

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const getRestaurants = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants`,
        axiosConfig
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //! Toda vez que salvo o getRestaurants entra como Dependency automaticamente.
  useEffect(() => {
    getRestaurants();
  }, []);

  return restaurants;
};
