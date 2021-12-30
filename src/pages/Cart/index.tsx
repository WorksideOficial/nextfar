import React, { useState } from "react";
import Header from "../../components/Header";
import SidebarLeft from "../../components/SidebarLeft";
import { Main, Content, BoxItem, Button, CartContent, Item, BoxItemTotal } from "./styles";

interface Itens {
  id: string;
  name: string;
  price: number;
  items: {};
}
const Base = "http://localhost:3000";

const Cart:React.FC<Itens> = () => {
  const itens = JSON.parse(sessionStorage.getItem('@itens:cart') || '[]');
  const[cart, setCart] = useState<Array<{
      name: string, 
      price: number, 
      id: number
    }>>(itens);
    
  const storage = sessionStorage.getItem('@itens:cart');
  if(!storage){
    window.location.href=Base;
  }
    const TotalPrice = cart.reduce((acc:any, current:any) => acc + current.price.price, 0);

    const clearCart = () => {
      sessionStorage.removeItem('@itens:cart');
      window.location.href=Base;
    }

    const removeItem = (itemId:any) => {
      const filter = cart.filter(cartItem => cart.indexOf(cartItem) !== itemId);
      setCart(filter);
    }

  return(
    <>
    <Header />
    <Main>
        <SidebarLeft />
        <Content>
        <Button onClick={clearCart}>Limpar Carrinho</Button>
          <CartContent>
            <BoxItem>
            {itens.map((item:any, index:any) => (
                <Item key={index}>
                <table>
                <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>R$ {item.price.price}</td>
                  <td><button className="button"  onClick={() => {removeItem(item)}}>Excluir</button></td>
                </tr>
                </tbody>
              </table>
              </Item>
              ))}
            </BoxItem>
            <BoxItemTotal>
              <span><b>Valor Total</b></span>
                <h2>R$ {TotalPrice}</h2>
            </BoxItemTotal>
          </CartContent>

        </Content>
    </Main>
    </>
  );  
}

export default Cart;