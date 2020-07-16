import React from "react"; 
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import axios from "axios";
import { useForm } from "../Hooks/useForm";
import "./signUp.css";
import Logo from "../../assets/images/logo-invert/logo-invert.png";


const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"
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
    
  const checkPassword = () => {
    const password1 = form.password
    const password2 = form.cPassword
      if (password1 !== password2) {
        alert("sua senha não é igual")
      }
  }

  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    cPassword:""
  });

  const handleInputChange = event => {
    const { name, value } = event.target

    onChange(name, value)
  };
  
  const handleFormValues = (event) => {
    checkPassword()
    event.preventDefault()
    registerUser()
  };

  const registerUser = () => {
    console.log(form)
    axios
      .post(`${baseUrl}/signup`, form)
      .then((response) => {
        alert("Cadastro Efetuado")
      })
      .catch((error) => {
        console.log(error.response.data.message)
        alert("Cadastro não realizado");
      })
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
            name="name"
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
            name="email"
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
            name="cpf"
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
            name="password"
            type="password"
            placeholder="Mínimo 6 caracteres"
        />
        <TextField
            className="style-input"
            required
            helperText="Deve ser a mesma que a anterior."
            id="outlined-required"
            label="Confirmar"
            variant="outlined"
            value={form.cPassword}
            onChange={handleInputChange}
            name="cPassword"
            type="password"
            placeholder="Confirme a senha anterior"
        />
        <button className="style-button">Criar</button>
      </ContainerForm>
    </Container>
  );
};

export default SignUpPage;
