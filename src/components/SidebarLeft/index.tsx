import React from "react";
import { Sidebar, BoxTop } from "./styles";

const SidebarLeft:React.FC = () => {
  return(
    <>
    <Sidebar>
          <BoxTop>
            <div>
              <h3><i className="fas fa-store"></i> FARMÁCIA DA ILHA</h3>
              <b>00.000.000/0000-00</b>
            </div>
            <div>
              <span>&gt;</span>
            </div>
          </BoxTop>
          <h3>COMPRAS</h3>
            <ul>
              <li><span><i className="fab fa-product-hunt"></i> Promoções</span></li>
              <li><span><i className="fas fa-prescription-bottle-alt"></i> Produtos</span></li>
              <li><span><i className="far fa-folder"></i> Pedidos</span></li>
              <li><span><i className="fas fa-ticket-alt"></i> Cupons</span></li>
            </ul>
            <h3>ADMINISTRATIVO</h3>
            <ul>
              <li><span><i className="fas fa-building"></i> Estabelecimentos</span></li>
            </ul>
            <h3>AJUDA</h3>
            <ul>
              <li><span><i className="fab fa-whatsapp"></i> Whatsapp</span></li>
              <li><span><i className="fas fa-phone-square-alt"></i> Contato Distribuidora</span></li>
            </ul>
        </Sidebar>
    </>
  );
}
export default SidebarLeft;