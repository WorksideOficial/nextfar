import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px;
  align-items: flex-end;
`;
export const CartContent = styled.div`
/* background-color: tomato; */
width: 100%;
display: flex;
justify-content: space-between;
`;
export const BoxItem = styled.div`
    width: 65%;
    padding: 12px;
    /* background-color: tomato; */
`;

export const Item = styled.div`
    width: 100%;
    padding: 12px;
    background-color: var(--white);
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 10px;

    table, td, th {
    text-align: left;
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      padding: 15px;
      .button{
        background-color: var(--red);
        color: var(--white);
        border-radius: 5px;
        padding: 12px;
        margin-bottom: 10px;
        cursor: pointer;
        border: 0;
      }
    }
`;

export const BoxItemTotal = styled.div`
    width: 34%;
    height: 250px;
    padding: 12px;
    background-color: var(--white);
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 10px;
`;

export const Button = styled.div`
    background-color: var(--red);
    color: var(--white);
    border-radius: 5px;
    padding: 12px;
    width: 12%;
    margin-bottom: 10px;
    cursor: pointer;
`;