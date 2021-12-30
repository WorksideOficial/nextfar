import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Error from './components/Error';
import Home from './pages/Home';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import GlobalStyles from './styles/GlobalStyles';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
       <ToastContainer autoClose={3000} />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/carrinho" exact component={Cart} />
      <Route path="*" exact component={Error} />
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
