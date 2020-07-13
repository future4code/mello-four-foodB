import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from "../../Image/logo-invert/logo-invert.png";
import "./login.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.5rem;
  height: 55rem;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${baseUrl}/login`, loginBody);
      window.localStorage.setItem("token", response.data.token);
      alert("logado");
    } catch (error) {
      console.log(error);
      alert("falha ao logar");
    }
  };

  return (
    <Container>
      <FormContainer>
        <img src={Logo} className="imageLogo" alt="logotipo ifuture" />
        <h4>Entrar</h4>
        <input
          className="style-input"
          value={email}
          onChange={handleEmail}
          placeholder="email@email.com"
        />
        <input
          className="style-input"
          value={password}
          onChange={handlePassword}
          placeholder="Mínimo 6 caracteres"
        />
        <button onClick={login} className="style-button">
          Entrar
        </button>
        <p className="stile-text">Não possui cadastro? Clique aqui.</p>
      </FormContainer>
    </Container>
  );
}

export default LoginPage;
