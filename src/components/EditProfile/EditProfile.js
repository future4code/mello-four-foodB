import React, { useState, useEffect } from "react";
import { useForm } from "../Hooks/useForm";
import styled from "styled-components";

import TextField from "@material-ui/core/TextField";

import axios from "axios";
import "./EditProfile.css";

// import { Container } from './styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.5rem;
  height: 40rem;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function EditProfile() {
  useEffect(() => {
    editProfile();
  }, []);

  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  const handleFormValues = (event) => {
    event.preventDefault();
    editProfile();
  };

  const editProfile = () => {
    const token = window.localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile",
        form,
        axiosConfig
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(form);
      });
  };

  return (
    <Container>
      <p>Editar</p>
      <FormContainer onSubmit={handleFormValues}>
        <TextField
          className="style-input"
          id="outlined-required"
          required
          label="Nome"
          value={form.name}
          onChange={handleInputChange}
          name="name"
          variant="outlined"
        ></TextField>
        <TextField
          className="style-input"
          id="outlined-required"
          required
          type="email"
          label="E-mail"
          value={form.email}
          name="email"
          onChange={handleInputChange}
          variant="outlined"
        ></TextField>
        <TextField
          className="style-input"
          id="outlined-required"
          required
          type="number"
          label="CPF"
          value={form.cpf}
          name="cpf"
          onChange={handleInputChange}
          variant="outlined"
        ></TextField>
        <button className="style-button">SALVAR</button>
      </FormContainer>
    </Container>
  );
}

export default EditProfile;
