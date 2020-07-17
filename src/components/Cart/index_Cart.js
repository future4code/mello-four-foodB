import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './style_Cart';
//rgba(232, 34, 46, 0.5);
//mock carrinho
//[{"id": 1, "product": "Cart", "price": 15, "image": "https://www.teclasap.com.br/wp-content/uploads/2011/05/hamburger.jpg"}, {"id": 2, "product": "Cart", "price": 13, "image": "https://www.teclasap.com.br/wp-content/uploads/2011/05/hamburger.jpg"}]

const Index_Cart = (props) => {
  const history = useHistory();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [paymentMethod, setPaymentMethod] = useState('');
  const address = JSON.parse(localStorage.getItem('user'));
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
    //localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.parse(newCart))
  }

  const confirmBuy = (products) => {
    const product = products.map(item => {
        return {"id": item.id,
                "quantity": item.qtd};
    })

    const dataBuy = {
        "products": product,
            "paymentMethod": paymentMethod 
        } 
    const dataBuy2 = {
        "products": [{
            "id": "3vcYYSOEf8dKeTPd7vHe",
            "quantity": 2
        }, {
            "quantity": 1,
            "id": "5omTFSOBYiTqeiDwhiBx"
        }],
        "paymentMethod": "creditcard"
    }
    console.log(dataBuy)
    console.log(dataBuy2)
        const dataInicial = new Date(1594994968394)
        const dataFinal = new Date(1595007421284)
        //console.log(dataInicial)
        //console.log(dataFinal)
    if(paymentMethod !== ''){
    //falta adicionar o restaurant
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/1/order`, 
        dataBuy, 
        {headers: {
            auth: token
        }})
        .then(response => {
            console.log(response)
            //console.log(response.order.createdAt);
            //console.log(response.order.expiresAt);
            localStorage.removeItem('cart');
            history.push('/feed')
        }).catch(error => {
            console.log(error.message)
        })
    }
    
  }

  if (newCart.length === 0 || newCart=== undefined){
    return(<S.DivContainer>
        <S.DivSubHeader>Meu carrinho</S.DivSubHeader>
        <S.DivTitleEndereco>
            <S.Pdefault>Endereço de entrega</S.Pdefault>
            <S.PAddress>{address.address}</S.PAddress>
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
      <>
        <S.DivContainer>
            <S.DivSubHeader>Meu carrinho</S.DivSubHeader>
            <S.DivTitleEndereco>
                <S.Pdefault>Endereço de entrega</S.Pdefault>
                <S.PAddress>{address.address}</S.PAddress>
            </S.DivTitleEndereco>
            <S.DivCartFull>
              {newCart.length > 0 && newCart.product.map((product) => {
                return (
                <S.DivCard key={product.id}>
                    <S.ImgProduct src={product.photoUrl} />
                    <S.DivProductDetail>
                        <S.QuantityProducts>{product.qtd}</S.QuantityProducts>
                        <S.TitleProduct>{product.name}</S.TitleProduct>
                        <S.DescProduct>{product.description}</S.DescProduct>
                      <S.BottomCard>  
                        <S.PriceProduct>{product.price}</S.PriceProduct>
                        <S.ButtonDeleteProduct onClick={() => removeProduct(product.id)}>remover</S.ButtonDeleteProduct>
                      </S.BottomCard>
                    </S.DivProductDetail>
                </S.DivCard>)
            })}
            </S.DivCartFull>
            <S.DivFreight>Frete R$6,00</S.DivFreight>
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
                <S.InputRadio data-testid="card" name="paymentMethod" type="radio" id="card" value="creditcard" onChange={choosePaymentMethod}/> Cartão de crédito
            </div>  
          <S.DivDataPayment>
            <S.DivButton>
                <S.ButtonCartFull onClick={() => {confirmBuy(newCart)}}>Confirmar</S.ButtonCartFull> 
            </S.DivButton>
          </S.DivDataPayment> 
        </S.DivContainer>
          </>
        )
  }
}

export default Index_Cart;