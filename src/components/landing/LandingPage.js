import React from "react";
import styled from "styled-components";
import Logo from "../../Image/logo.png";
import "./landing.css";

const Container = styled.div`
  display: flex;
  width: 23.5rem;
  height: 55rem;
  background-color: #e8222e;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    width: 49rem;
    height: 64rem;
  }

  @media (min-width: 1024px) {
    width: 70rem;
    height: 85.5rem;
  }

  @media (min-width: 1035px) {
    width: 86rem;
    height: 42rem;
  }
`;

function Landing() {
  return (
    <Container>
      <div>
        <img className="logo" src={Logo} />
      </div>
    </Container>
  );
}

export default Landing;
