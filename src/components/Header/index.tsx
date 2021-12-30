import React, { Children } from "react";
import { Link } from "react-router-dom";
import Img01 from "../../assets/Nexfar.png";
import DefaultImg from "../../assets/default-user.png";
import { Container, Logo, Menu, Price, Avatar } from "./styles";

const Header:React.FC = () => {
  return(
    <Container>
      <Logo>
        <Link to="/"><img src={Img01} alt="" /></Link> 
      </Logo>
      <Logo>
        <Link to="/carrinho"><h2><i className="fas fa-shopping-cart"></i> Ir para o carrinho</h2></Link> 
      </Logo>
      <Menu>
        <Price>
           <b>NEXFAR</b> 
          <span><i className="fas fa-shopping-cart"></i> R$ 450,00</span>
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