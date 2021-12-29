import React from "react";
import { Sidebar, BoxTop } from "./styles";

const SidebarLeft:React.FC = () => {
  return(
    <>
    <Sidebar>
          <BoxTop>
            <div>
              <h3>FARMÁCIA DA ILHA</h3>
              <b>00.000.000/0000-00</b>
            </div>
            <div>
              <span>&gt;</span>
            </div>
          </BoxTop>
          <h3>COMPRAS</h3>
            <ul>
              <li><span> Promoções</span></li>
              <li><span> Produtos</span></li>
              <li><span> Pedidos</span></li>
              <li><span> Cupons</span></li>
            </ul>
            <h3>ADMINISTRATIVO</h3>
            <ul>
              <li><span> Estabelecimentos</span></li>
            </ul>
            <h3>AJUDA</h3>
            <ul>
              <li><span> Whatsapp</span></li>
              <li><span> Contato Distribuidora</span></li>
            </ul>
        </Sidebar>
    </>
  );
}
export default SidebarLeft;