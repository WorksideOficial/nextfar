import React from "react";
import Header from "../../components/Header";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import { Main, Content } from "./style";

const Error:React.FC = () => {
  return(
    <>
    <Header />
    <Main>
        <SidebarLeft />
        <Content>
          <h2>Erro 404</h2>
        </Content>
        <SidebarRight />
    </Main>
    </>
  );
}

export default Error;