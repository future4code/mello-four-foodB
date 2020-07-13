import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignUpPage } from "../components/signUp/SignUpPage";
import LoginPage from "../components/login/LoginPage";
import FeedPage from "../components/feedPage/feedPage";
import { RegisterAddressPage } from "../components/registerAddress/RegisterAddressPage";
import Profile from "../components/profile/profile";
import LandingPage from "../components/landing/LandingPage";
import cartPage from "../Hooks/CartPage/index";

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
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signUp" component={SignUpPage} />
      <PrivateRoute exact path="/feed" component={FeedPage} />
      <PrivateRoute exact path="/register" component={RegisterAddressPage} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/cartPage" component={cartPage} />
    </Switch>
  );
};

export default Routes;
