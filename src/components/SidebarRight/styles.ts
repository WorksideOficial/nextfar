import styled from "styled-components";

export const Sidebar = styled.div`
  width: 18%;
  min-height: 100vh;
  border-left: 1px solid var(--gray);
  h3{
    margin-top: 12px;
    margin-left: 12px;
    color: var(--purple);
  }
  ul{
    list-style: none;
    li{
      padding: 12px;
      span{
        font-size: 0.9em;
      }
    }
  }
`;
