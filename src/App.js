import React from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <AppContainer token={getToken()}> */}
      <Routes />
      {/* </AppContainer> */}
    </BrowserRouter>
  );
}

export default App;
