import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Restaurant.css';

function Restaurant({
    match: {
      params: { id },
    },
  }) {

  let history = useHistory();
  
  const [restaurant, setRestaurant] = useState({}); 
  const [products, setProducts] = useState([]); 

  useEffect(() => {
      GetRestaurantData();
  },[])

  function GetRestaurantData(){
    const token = window.localStorage.getItem('token');
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${id}`, 
    {
      headers: {
      auth: token
      }
    })
    .then(response => {
       console.log(response.data.restaurant); 
       setRestaurant(response.data.restaurant);
       setProducts(response.data.restaurant.products);
    })
    .catch(error => {
        console.log(error); 
     })
  }
  
  const ChangePage = (pageToLink) => {
    history.push(`/${pageToLink}`);
  }

  return <div> 
          <Header BackArrow='True' PageToLink='' title='Habbibs'/>
          <h1>Title</h1>
          <Footer currentPage='Profile'/>
    </div>
}

export default Restaurant