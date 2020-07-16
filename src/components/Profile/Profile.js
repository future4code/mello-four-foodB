import React, { useState, useEffect } from "react";
import {
  Container,
  TitleProfile,
  PerfilStyle,
  Rectangle,
  EnderecoCadastrado,
  Endereco,
  Pedido,
  Text,
  PedidosCard,
  RestaurantName,
  Day,
  SubTotal,
  CardsStyled,
  CardsStyled2,
  Img,
} from "../Profile/styled";
import editIcon from "../../assets/Profile/edit.png";
import axios from "axios";

// import { Container } from './styles';

function ProfilePage() {
  const [profile, setProfile] = useState("");
  const [address, setAddress] = useState();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getProfile();
    getHistory();
  }, []);

  const getProfile = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZBOGlWQ2RVZ3k2R01OSE1BU1AxIiwibmFtZSI6Ikx1aXoiLCJlbWFpbCI6Imx1aXpAZ21haWwuY29tIiwiY3BmIjoiMjIyLjIyMi4zMzMtNDQiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNTk0NzAxOTI3fQ.0Nmf_3Ow1zhBIExOzMVQp78HD--o5DO0BxBdP13Jh9E";

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile",
        axiosConfig
      )
      .then((response) => {
        setProfile(response.data.user);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getHistory = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZBOGlWQ2RVZ3k2R01OSE1BU1AxIiwibmFtZSI6Ikx1aXoiLCJlbWFpbCI6Imx1aXpAZ21haWwuY29tIiwiY3BmIjoiMjIyLjIyMi4zMzMtNDQiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNTk0NzAxOTI3fQ.0Nmf_3Ow1zhBIExOzMVQp78HD--o5DO0BxBdP13Jh9E";

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history",
        axiosConfig
      )
      .then((response) => {
        setHistory(response.data.orders);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <TitleProfile>
        <p>Meu Perfil</p>
      </TitleProfile>

      <CardsStyled>
        <PerfilStyle>
          {profile.name} <Img src={editIcon} />
        </PerfilStyle>
        <PerfilStyle>{profile.email}</PerfilStyle>
        <PerfilStyle>{profile.cpf}</PerfilStyle>
      </CardsStyled>

      <CardsStyled2>
        <EnderecoCadastrado>
          Endereço Cadastrado
          <Img src={editIcon} />
        </EnderecoCadastrado>
        <Endereco>{profile.address}</Endereco>
      </CardsStyled2>
      <Pedido>Histórico de pedidos</Pedido>
      <hr></hr>
      <CardsStyled>
        <Text>
          {history.length
            ? history.map((order) => {
                const date = new Date(order.expiresAt).toLocaleDateString(
                  "pt-br"
                );
                return (
                  <PedidosCard>
                    <Rectangle>
                      <RestaurantName>{order.restaurantName}</RestaurantName>
                      <Day>{date}</Day>
                      <SubTotal>
                        <p>SUBTOTAL R${order.totalPrice}</p>
                      </SubTotal>
                    </Rectangle>
                  </PedidosCard>
                );
              })
            : "Você não realizou nenhum pedido "}
        </Text>
      </CardsStyled>
    </Container>
  );
}

export default ProfilePage;
