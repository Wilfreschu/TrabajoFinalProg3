
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home/Home"
import Detalle from './Screens/Home/Detalle/Detalle';
import DetalleSeries from './Screens/Home/DetalleSeries/DetalleSeries';
import Peliculas from './Screens/Home/Peliculas/Peliculas';
import Series from './Screens/Home/Series/Series';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/detalle/:id" component={Detalle} />
      <Route path="/detalleSerie/:ids" component = {DetalleSeries}/>
      <Route path= "/Peliculas" component = {Peliculas}/>
      <Route path= "/Series" component = {Series}/>
      </Switch>
    </Router>
   
  );
}

export default App;
