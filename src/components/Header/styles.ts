import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85px;
  background-color: #fff;
  border-bottom: 2px solid var(--green);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 90px;
  padding-right: 90px;
`;
export const Logo = styled.div`
  img{
    width: 150px;
  }
  h2{
    color: var(--green);
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span{
    color: var(--green);
    font-size: 1.3em;
    font-weight: 500;
  }
`;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  span{
    margin-right: 10px;
  }
  img{
    width: 50px;
    height: 50px;
    border-radius: 20px;
  }
`;