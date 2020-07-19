import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './OrderPopUp.css';

import clock from '../../assets/images/clock.svg'


function OrderPopUp(props) {
  const [order, setOrder] = useState({});

  //props
  // Restaurant: Nome do restaurant
  // Price: preço

  // <OrderPopUp Restaurant:'Habbibs' Price:'70,50'/>

  useEffect(() => {
    GetActiveOrder();
  }, [])

  const GetActiveOrder = () => {
    const token = window.localStorage.getItem('token');
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/active-order', {
        headers: {
        auth: token
        }
    })
    .then(response => {
        console.log(response);
        setOrder(response.data);
    })
    .catch(error => {
        console.log(error);
    })
  }

  return  <div className='Popup'> 
        <div className='PopupContainer'>
            <img className='Image' src={clock}/>
            <div>
                <h4 className='title'>Pedido em andamento</h4>
                <p variant='button'>{props.Restaurant}</p>
                <p variant='h6' className='Total'><b>SUBTOTAL R${props.Price}</b></p>
            </div>
            <div className='Space'/>
        </div>  
    </div>
}

export default OrderPopUp