import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "../components/SignUp/SignUpPage";
import LoginPage from "../components/Login/LoginPage";
import FeedPage from "../components/FeedPage/FeedPage";
import RestaurantPage from "../components/Restaurant/Restaurant";

import RegisterAddressPage from "../components/RegisterAddress/RegisterAddressPage";
import CartPage from "../components/Cart/cart";

//import Profile from "../Profile/index";

function PrivateRoute({ component: Component, ...rest }) {
  const token = window.localStorage.getItem("token");

  const route = !token ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} component={Component} />
  );

  return route;
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <PrivateRoute exact path="/feed" component={FeedPage} />
      <PrivateRoute exact path="/address" component={RegisterAddressPage} />
      <PrivateRoute exact path="/Restaurant/:id" component={RestaurantPage} />
      {<PrivateRoute exact path="/cart" component={CartPage} />}
      {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
    </Switch>
  );
};

export default Routes;
