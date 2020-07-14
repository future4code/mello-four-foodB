import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from '../Hooks/useForm'
import './signUp.css'
import Logo from '../images/logo-invert/logo-invert.png'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 23.5rem;
    height: 55rem;
    background-color: white;
    align-items: center;
    justify-content: center;
    
`
const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SignUpPage = () => {
    const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: ""})

    const handleInputChange = event => {
        const { name, value } = event.target

        onChange(name, value)
    }

    const handleFormValues = (event) => {
        event.preventDefault()
        registerUser()
    }

    const registerUser = () => {
        axios.post(`${baseUrl}/signup`, form)
        .then(response => {
            alert("Cadastro Efetuado")
        })
        .catch(error => {
            console.log(error)
            alert("Cadastro não realizado")
        })
    }
    return (
        <Container>
            <ContainerForm onSubmit={handleFormValues}>
                <img src={Logo} className="imageLogo" alt="logotipo ifuture" />
                <h4>Cadastrar</h4>
                <input
                    className="style-input"
                    value={form.name}
                    name="name"
                    type="text"
                    placeholder="nome"
                    required
                    onChange={handleInputChange}
                />
                <input
                    className="style-input"
                    value={form.email}
                    name="email"
                    type="text"
                    placeholder="email"
                    required
                    onChange={handleInputChange}
                />
                <input
                    className="style-input"
                    value={form.cpf}
                    name="cpf"
                    type="text"
                    placeholder="cpf"
                    required
                    onChange={handleInputChange}
                />
                <input
                    className="style-input"
                    value={form.password}
                    name="password"
                    type="password"
                    placeholder="senha"
                    required
                    onChange={handleInputChange}
                />
                <button className="style-button">Criar</button>
            </ContainerForm>
        </Container>
    )
}

export default SignUpPage