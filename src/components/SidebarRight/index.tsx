import React from "react";

import { Sidebar } from "./styles";

const SidebarRight:React.FC = () =>{
  return(
    <Sidebar>
        <h3>AÇÕES COMERCIAIS</h3>
        <ul>
          <li><span><input type="checkbox" name="" id="" /> EM PROMOÇÃO</span></li>
          <li><span><input type="checkbox" name="" id="" /> EM OFERTA</span></li>
        </ul>
        <h3>ESTOQUE</h3>
        <ul>
          <li><span><input type="checkbox" name="" id="" /> ESTOQUE DISPONÍVEL</span></li>
        </ul>
        <h3>CATEGORIAS</h3>
        <ul>
          <li><span><input type="checkbox" name="" id="" /> GENÉRICOS</span></li>
          <li><span><input type="checkbox" name="" id="" /> SIMILARES</span></li>
          <li><span><input type="checkbox" name="" id="" /> PSICOTRÓPICOS</span></li>
          <li><span><input type="checkbox" name="" id="" /> HIGIENE E BELEZA</span></li>
        </ul>
    </Sidebar>
  );
}

export default SidebarRight;