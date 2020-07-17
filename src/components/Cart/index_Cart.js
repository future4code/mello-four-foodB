import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import * as S from './style_Cart';
//rgba(232, 34, 46, 0.5);
//mock carrinho
//[{"id": 1, "product": "Cart", "price": 15, "image": "https://www.teclasap.com.br/wp-content/uploads/2011/05/hamburger.jpg"}, {"id": 2, "product": "Cart", "price": 13, "image": "https://www.teclasap.com.br/wp-content/uploads/2011/05/hamburger.jpg"}]

const Index_Cart = (props) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [paymentMethod, setPaymentMethod] = useState('');
  const address = JSON.parse(localStorage.getItem('addressUser'));
  const [newCart, setNewCart] = useState([]);
  const auxNewCart = []

  const choosePaymentMethod = (event) => {
      setPaymentMethod(event.target.value);
  }

  useEffect(()  => {

  const listCart = () => {
    cart.forEach(item => {
        console.log("item forEach " + JSON.stringify(item))
        const inArray = auxNewCart.findIndex(index => {
            return index.id === item.id
        })
        console.log(inArray)
        if(inArray === -1){
            const prod = {
                ...item, qtd: 1
            }
            auxNewCart.push(prod)
        } else {
            auxNewCart.map(product => {
                if(product.id === item.id){
                    return {...product, qtd: product.qtd++}
                }
                return product
            })
        }
        });

        setNewCart(auxNewCart)
    }

    if(cart !== null){
        listCart();
    }

  },[])
  console.log(newCart)
  const removeProduct = (id) => {
    console.log(newCart)
    const removeCart = newCart.filter(item => item.id !== id)
    setNewCart(removeCart);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.parse(newCart))
  }

  const confirmBuy = () => {
    const dataBuy = {
      "products": 
        [{
            "id": "CnKdjU6CyKakQDGHzNln",
            "quantity": 10
        }, {
            "quantity": 1,
            "id": "KJqMl2DxeShkSBevKVre"
        }],
        "paymentMethod": "creditcard"
        }
  }

  if (newCart.length === 0 || newCart=== undefined){
    return(<S.DivContainer>
        <S.DivSubHeader>Meu carrinho</S.DivSubHeader>
        <S.DivTitleEndereco>
            <S.Pdefault>Endereço de entrega</S.Pdefault>
            <S.PAddress>{address.address.street}</S.PAddress>
        </S.DivTitleEndereco>
        <S.DivCart>Carrinho vazio</S.DivCart>
        <S.DivFreight>frete R$0,00</S.DivFreight>
        <S.DivPayment>
            <div>SubTotal</div>
            <div>R$0,00</div>
        </S.DivPayment>
        <S.DivText>Forma de pagamento</S.DivText>
        <S.DivHr><hr /></S.DivHr>
        <div>
            <S.InputRadio data-testid="money" name="paymentMethod" type="radio" id="money" value="money" onChange={choosePaymentMethod}/> Dinhero
        </div>
        <div>
            <S.InputRadio data-testid="card" name="paymentMethod" type="radio" id="card" value="creditcard" onChange={choosePaymentMethod}/> Cartão de crédito
        </div>
        <S.DivDataPayment>
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
            <S.DivCartFull>
              {newCart.length > 0 && newCart.map((product) => {
                return (
                <S.DivCard key={product.id}>
                    <S.ImgProduct src={product.image} />
                    <S.DivProductDetail>
                        <S.QuantityProducts>{product.qtd}</S.QuantityProducts>
                        <S.TitleProduct>{product.product}</S.TitleProduct>
                        <S.DescProduct></S.DescProduct>
                      <S.BottomCard>  
                        <S.PriceProduct>{product.price.toFixed(2)}</S.PriceProduct>
                        <S.ButtonDeleteProduct onClick={() => removeProduct(product.id)}>remover</S.ButtonDeleteProduct>
                      </S.BottomCard>
                    </S.DivProductDetail>
                </S.DivCard>)
            })}
            </S.DivCartFull>
            <S.DivFreight>Frete R$0,00</S.DivFreight>
            <S.DivPayment>
                <div>SubTotal</div>
                <div>R${(newCart.reduce((acumulador, valor) => acumulador + valor.price, 0)).toFixed(2)}</div>
            </S.DivPayment>
            <S.DivText>Forma de pagamento</S.DivText>
            <hr />
            <div>
                <S.InputRadio data-testid="money" name="paymentMethod" type="radio" id="money" value="money" onChange={choosePaymentMethod}/> Dinhero
            </div>
            <div>
                <S.InputRadio data-testid="card" name="paymentMethod" type="radio" id="card" value="card" onChange={choosePaymentMethod}/> Cartão de crédito
            </div>  
          <S.DivDataPayment>
            <S.DivButton>
                <S.ButtonCartFull>Confirmar</S.ButtonCartFull> 
            </S.DivButton>
          </S.DivDataPayment>  
        </S.DivContainer>)
  }
}

export default Index_Cart;