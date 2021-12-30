import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img01 from "../../assets/Nexfar.png";
import DefaultImg from "../../assets/default-user.png";
import { Container, Logo, Menu, Price, Avatar } from "./styles";

const Header:React.FC = () => {
  const itens = JSON.parse(sessionStorage.getItem('@itens:cart') || '[]');
  const[cart, setCart] = useState<Array<{
      name: string, 
      price: number, 
      id: number
    }>>(itens);

    const TotalPrice = cart.reduce((acc:any, current:any) => acc + current.price.price, 0);

    useEffect(() => {
      setCart(itens);
    },[itens]);    
  return(
    <Container>
      <Logo>
        <Link to="/"><img src={Img01} alt="" /></Link> 
      </Logo>
      <Logo>
        <Link to="/carrinho"><h2><i className="fas fa-shopping-cart"></i>  ({cart.length}) Meu carrinho</h2></Link> 
      </Logo>
      <Menu>
        <Price>
           <b>NEXFAR</b> 
          <span><i className="fas fa-shopping-cart"></i> R$ {TotalPrice.toFixed(2)}</span>
          <p>Pedido Mínimo: R$ 150,00</p>
        </Price>
        <Avatar>
          <span>Nilton R.C Santos</span>
          <img src={DefaultImg} alt="" />
        </Avatar>
      </Menu>
    </Container>
  );
}
export default Header;