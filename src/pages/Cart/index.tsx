import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import SidebarLeft from "../../components/SidebarLeft";
import { Main, Content, BoxItem, Button, CartContent, Item } from "./styles";

interface Itens {
  id: string;
  name: string;
  price: number;
  items: [];
}
const Base = "http://localhost:3000";

const Cart:React.FC<Itens> = () => {
  const [items, setItems] = useState("");
  const itens = JSON.parse(sessionStorage.getItem('@itens:cart') || '{}');
  const storage = sessionStorage.getItem('@itens:cart');
  if(!storage){
    window.location.href=Base;
  }
  console.log(itens);
  const clearCart = () => {
    sessionStorage.removeItem('@itens:cart');
    window.location.href=Base;
  }

  const clearCartItem = (id:any) => {
    const items = JSON.parse(sessionStorage.getItem('@itens:cart') || '{}');
    const index = items.indexOf(id);

    console.log(index);
    const existInLocalStorage = index === - 1;

    console.log(existInLocalStorage);

    if(existInLocalStorage){
      items.splice(index);
      setItems(items);
    }
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
            <h2>Produtos</h2>
              {itens.map((item:any, index:any) => (
                <Item key={index}>
                <table>
                <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>R$ {item.price.price}</td>
                  <td><button className="button" onClick={() => {clearCartItem(item.id)}}>Excluir</button></td>
                </tr>
                </tbody>
              </table>
              </Item>
              ))}
                
              
            </BoxItem>
          </CartContent>

        </Content>
    </Main>
    </>
  );  
}

export default Cart;