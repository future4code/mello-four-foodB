import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpPage from "../SignUp/index";
import LoginPage from "../LoginPage/index";
import FeedPage from "../FeedPage/index";

import Address from "../Address/index";
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
      <PrivateRoute exact path="/address" component={Address} />
      <PrivateRoute exact path="/cart" component={CartPage} />
      <PrivateRoute exact path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
