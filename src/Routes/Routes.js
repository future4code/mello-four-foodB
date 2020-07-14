import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "../components/signUp/SignUpPage";
import LoginPage from "../components/login/LoginPage";
import FeedPage from "../components/HomePage/HomePage";

import RegisterAddressPage from "../components/registerAddress/RegisterAddressPage";
import CartPage from "../CartPage/index";
import Profile from "../Profile/index";

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
      <PrivateRoute exact path="/cart" component={CartPage} />
      <PrivateRoute exact path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
