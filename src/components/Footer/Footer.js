import React from 'react';
import { useHistory } from "react-router-dom";
import './Footer.css';

import { IconButton, Divider  } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


function Footer(props) {
  let history = useHistory();

  /*Props
    currentPage = "Home" || "Shopping" || Profile

    Ex: <Footer currentPage='Profile'/>
  */

  const ChangePage = (pageToLink) => {
    history.push(`/${pageToLink}`);
  }

  const GetFooter = () => {
    return (
    <div className="Footer">
        {props.currentPage === 'Home'? 
        <IconButton onClick={() => ChangePage('Home')} color="secondary"><HomeOutlinedIcon/></IconButton> :
        <IconButton onClick={() => ChangePage('Home')}><HomeOutlinedIcon/></IconButton>}

        {props.currentPage === 'Shopping'? 
        <IconButton onClick={() => ChangePage('Shopping')} color="secondary"><ShoppingCartOutlinedIcon/></IconButton> :
        <IconButton onClick={() =>  ChangePage('Shopping')}><ShoppingCartOutlinedIcon/></IconButton>}

        {props.currentPage === 'Profile'? 
        <IconButton onClick={() =>  ChangePage('Profile')} color="secondary"><PersonOutlineOutlinedIcon/></IconButton> :
        <IconButton onClick={() =>  ChangePage('Profile')}><PersonOutlineOutlinedIcon/></IconButton>}   
    </div>
    )
  }

  return  <div className="AppBar"> 
        <Divider/>
        {GetFooter()}
    </div>
}

export default Footer