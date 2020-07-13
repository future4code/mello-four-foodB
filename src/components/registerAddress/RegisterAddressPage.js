import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "../../Hooks/useForm";
import "./register-address.css";

const token = window.localStorage.getItem("token");
const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.5rem;
  height: 55rem;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterAddressPage = () => {
  const { form, onChange } = useForm({
    street: "",
    number: 0,
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      //history.push('/LoginPage') usar para navegação
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };
  const handleFormValues = (event) => {
    event.preventDefault();
    registerAddress();
  };

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const registerAddress = () => {
    axios
      .put(`${baseUrl}/address`, form, axiosConfig)
      .then((response) => {
        alert("Endereço registrado com sucesso!");
        window.localStorage.setItem("address", response.data.user);
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <ContainerForm onSubmit={handleFormValues}>
        <h4>Meu endereço</h4>
        <input
          className="style-input"
          value={form.street}
          name="street"
          type="text"
          placeholder="Rua / AV."
          required
          onChange={handleInputChange}
        />
        <input
          className="style-input"
          value={form.number}
          name="number"
          type="number"
          placeholder="Número"
          required
          onChange={handleInputChange}
        />
        <input
          className="style-input"
          value={form.neighbourhood}
          name="neighbourhood"
          type="text"
          placeholder="Apto. / Bloco"
          required
          onChange={handleInputChange}
        />
        <input
          className="style-input"
          value={form.city}
          name="city"
          type="text"
          placeholder="Cidade"
          required
          onChange={handleInputChange}
        />
        <input
          className="style-input"
          value={form.state}
          name="state"
          type="text"
          placeholder="Estado"
          required
          onChange={handleInputChange}
        />
        <input
          className="style-input"
          value={form.complement}
          name="complement"
          type="text"
          placeholder="Complemento"
          required
          onChange={handleInputChange}
        />
        <button className="style-button">Salvar</button>
      </ContainerForm>
    </Container>
  );
};
