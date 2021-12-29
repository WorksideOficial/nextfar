import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100vh; */
  margin: 20px;
`;

export const ProductBox = styled.div`
  width: 100%;
  /* height: 200px; */
  padding: 12px;
  background-color: var(--white);
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 10px;

  .button{
    background-color: var(--purple);
    color: var(--white);
    border-radius: 5px;
  }
`;

export const HeaderItem = styled.div`
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  span{
    padding: 10px;
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Image = styled.div`
    width: 120px;
    height: 180px;
    /* background-color: aquamarine; */
    padding: 5px;
  img{
    width: 100%;
    height: 180px;
  }
`;
export const ItemDesc = styled.div`
width: 80%;
  table, td, th {    
    /* border: 1px solid rgb(194, 194, 194); */
    text-align: center;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: 15px;
    .button{
      padding: 10px;
      cursor: pointer;
    }
  }

`;

