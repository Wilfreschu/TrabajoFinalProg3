
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home/Home"
import Detalle from './Screens/Home/Detalle/Detalle';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/detalle/:id" component={Detalle} />
      </Switch>
    </Router>
   
  );
}

export default App;
