import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import * as S from './style_Cart';
//rgba(232, 34, 46, 0.5);

const Index_Cart = (props) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [paymentMethod, setPaymentMethod] = useState('');
  const address = JSON.parse(localStorage.getItem('addressUser'));
  
  const choosePaymentMethod = (event) => {
      setPaymentMethod(event.target.value);
  }

  if (cart.length === 0){
    return(<S.DivContainer>
        <S.DivSubHeader>Meu carrinho</S.DivSubHeader>
        <S.DivTitleEndereco>
            <S.Pdefault>Endereço de entrega</S.Pdefault>
            <S.PAddress>{address.address.street}</S.PAddress>
        </S.DivTitleEndereco>
        <S.DivCart>Carrinho vazio</S.DivCart>
        <S.DivDataPayment>
            <S.DivPayment>
                <div>frete</div>
                <div>R$0,00</div>
            </S.DivPayment>
            <S.DivPayment>
                <div>SubTotal</div>
                <div>R$0,00</div>
            </S.DivPayment>
            <S.DivText>Forma de pagamento</S.DivText>
            <hr />
            <div>
                <S.InputRadio data-testid="money" name="paymentMethod" type="radio" id="money" value="money" onChange={choosePaymentMethod}/> Dinhero
            </div>
            <div>
                <S.InputRadio data-testid="card" name="paymentMethod" type="radio" id="card" value="card" onChange={choosePaymentMethod}/> Cartão de crédito
            </div>
            <S.DivButton>
                <S.ButtonCartEmpty>Confirmar</S.ButtonCartEmpty> 
            </S.DivButton>
        </S.DivDataPayment>
        </S.DivContainer>)
  } else {
      return (
        <S.DivContainer>
            <S.DivSubHeader>Meu carrinho</S.DivSubHeader>
            <S.DivTitleEndereco>
                <S.Pdefault>Endereço de entrega</S.Pdefault>
                <S.PAddress>{address.address.street}</S.PAddress>
            </S.DivTitleEndereco>
            {cart.map((product) => {
            return (
                <S.DivText key={product.id}>{product.product}</S.DivText>)
            })}
          <S.DivDataPayment>
            <S.DivPayment>
                <div>frete</div>
                <div>R$0,00</div>
            </S.DivPayment>
            <S.DivPayment>
                <div>SubTotal</div>
                <div>R${(cart.reduce((acumulador, valor) => acumulador + valor.price, 0)).toFixed(2)}</div>
            </S.DivPayment>
            <S.DivText>Forma de pagamento</S.DivText>
            <hr />
            <div>
                <S.InputRadio data-testid="money" name="paymentMethod" type="radio" id="money" value="money" onChange={choosePaymentMethod}/> Dinhero
            </div>
            <div>
                <S.InputRadio data-testid="card" name="paymentMethod" type="radio" id="card" value="card" onChange={choosePaymentMethod}/> Cartão de crédito
            </div>
            ## LINK
            <S.DivButton>
                <S.ButtonCartFull>Confirmar</S.ButtonCartFull> 
            </S.DivButton>
          </S.DivDataPayment>  
        </S.DivContainer>)
  }
}

export default Index_Cart;