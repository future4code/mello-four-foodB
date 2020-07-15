import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"; // browserRouter para auxiliar o protectedPage.
import SignUpPage from "../components/SignUp/SignUpPage";
import LoginPage from "../components/Login/LoginPage";
import FeedPage from "../components/FeedPage/FeedPage";
import SearchPage from "../components/SearchPage/SearchPage";
import ProductsPage from "../components/SearchPage/Products/ProductsPage";
import RegisterAddressPage from "../components/RegisterAddress/RegisterAddressPage";
import RestaurantPage from "../components/Restaurant/Restaurant";
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
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <PrivateRoute exact path="/feed" component={FeedPage} />
      <PrivateRoute exact path="/search" component={SearchPage} />
      <PrivateRoute exact path="/products" component={ProductsPage} />
      <PrivateRoute exact path="/address" component={RegisterAddressPage} />
      <PrivateRoute exact path="/Restaurant/:id" component={RestaurantPage} />
      <PrivateRoute exact path="/cart" component={CartPage} />
      {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
