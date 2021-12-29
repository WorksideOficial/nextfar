import React, {useState} from "react";
import Header from "../../components/Header";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import { productsConfig } from "../../components/untils/config";
import { toast } from "react-toastify";
import { 
  Main, 
  Content, 
  ProductBox, 
  HeaderItem, 
  Items, 
  Item, 
  Image, 
  ItemDesc 
} from "./styles";


const Home:React.FC = () => {
  const[cart, setCart] = useState<Array<{
    name: string, 
    price: number, 
    id: number
  }>>([]);
  console.log("carrinho de compras", cart);

  const AddCart = (id:number, name:string, price:number) => {
    const itemObject = { id, name, price };
    setCart([...cart, itemObject]);
    sessionStorage.setItem('@itens:cart', JSON.stringify([...cart, itemObject]));
    toast.info('Produto adicionado no carrinho');
  }
  return(
    <>
    <Header />
    <Main>
        <SidebarLeft />
        <Content>
          {productsConfig.names.map((items:any, index:any) => (
             <ProductBox key={index}>
             <HeaderItem>
               <Items>
                 <span>{items.maker}</span>
                 <b>{items.name}</b>
               </Items>
               <Items>
               <span>1515415</span>
               <span>1515415</span>
               </Items>
             </HeaderItem>
             <Item>
               <Image>
                 <img src={items.imageURL} alt="" />
               </Image>
               <ItemDesc>
               <table>
                 <thead>
                   <tr>
                     <th>Base</th>
                     <th>Estoque</th>
                     <th>Quantidade(un)</th>
                     <th>Valor</th>
                     <th></th>
                   </tr>
                 </thead>
                 <tbody>
                    <tr>
                    <td>{items.base}</td>
                    <td>{items.quantityAvailable} un</td>
                    <td>100un</td>
                    <td>R$ 450,00</td>
                    <td><span className="button" onClick={() => AddCart(items.id, items.name, items.price)}>Adicionar</span></td>
                  </tr>
                 </tbody>
               </table>
               </ItemDesc>
             </Item>
           </ProductBox>
          ))}
         
        </Content>
        <SidebarRight />
    </Main>
    </>
  );
}

export default Home;