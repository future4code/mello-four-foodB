import React from "react";
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import styled from "styled-components";
import axios from "axios";
import { useForm } from "../Hooks/useForm";
import "./signUp.css";
import Logo from "../../assets/images/logo-invert/logo-invert.png";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

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
const SignUpPage = () => {
    
    const classes = useStyles()

  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleFormValues = (event) => {
    event.preventDefault();
    registerUser();
  };

  const registerUser = () => {
    axios
      .post(`${baseUrl}/signup`, form)
      .then((response) => {
        alert("Cadastro Efetuado");
      })
      .catch((error) => {
        console.log(error);
        alert("Cadastro não realizado");
      });
  };
  return (
    <Container>
      <ContainerForm onSubmit={handleFormValues}>
        <img src={Logo} className="imageLogo" alt="logotipo ifuture" />
        <h4 className="style-tittle">Cadastrar</h4>
        <TextField
            className="style-input"
            required
            id="outlined-required"
            label="Nome"
            variant="outlined"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Nome e sobrenome"
        />
        <TextField
            className="style-input"
            required
            id="outlined-required"
            label="E-mail"
            variant="outlined"
            value={form.email}
            onChange={handleInputChange}
            placeholder="email@email.com"
        />
        <TextField
            className="style-input"
            required
            id="outlined-required"
            label="CPF"
            variant="outlined"
            value={form.cpf}
            onChange={handleInputChange}
            placeholder="000.000.000-00"
        />
        <TextField
            className="style-input"
            required
            id="outlined-required"
            label="Senha"
            variant="outlined"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Mínimo 6 caracteres"
        />
        <button className="style-button">Criar</button>
      </ContainerForm>
    </Container>
  );
};

export default SignUpPage;
