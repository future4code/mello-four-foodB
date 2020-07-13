import React from "react";
import Routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        {/* <AppContainer token={getToken()}> */}
        <Routes />
        {/* </AppContainer> */}
      </BrowserRouter>
    </Container>
  );
}

export default App;
