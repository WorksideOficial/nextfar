import styled from "styled-components";

export const Sidebar = styled.div`
  width: 20%;
  min-height: 100vh;
  background-color: var(--white);

  h3{
    margin-top: 12px;
    margin-left: 12px;
    color: var(--black);
  }
  ul{
    list-style: none;
    margin-left: 12px;
    li{
      padding: 15px;
      span{
        font-size: 1em;
        font-weight: 500;
        color: var(--gray);
        &:hover{
          color: var(--green);
        }
      }
      &:hover{
          cursor: pointer;
          background-color: var(--primary);
          border-radius: 10px 0px 0px 10px;
        }
    }
  }
  
`;

export const BoxTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  b{
    margin-left: 13px;
  }
  span{
    margin-left: 13px;
    font-size: 1.5em;
    font-weight: 700;
  }
`;