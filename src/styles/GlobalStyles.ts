import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #ebebff;
    --secondary: #301b2c;
    --blue: #0070e0;
    --orange: #ffad5c;
    --red: #f62854;
    --purple: #5b127d;
    --green: #3cba92;
    --white: #fff;
    --dark: #000;
    --gray: #999;
  }
  body{
    background-color: var(--primary);
    font-family: 'Roboto', sans-serif;
  }
`;