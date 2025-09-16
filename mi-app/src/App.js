
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home/Home"
import DetallePelis from './Screens/DetallePelis/DetallePelis';
import DetalleSeries from './Screens/DetalleSeries/DetalleSeries';
import Peliculas from './Screens/Peliculas/Peliculas';
import Series from './Screens/Series/Series';
import SearchResults from './Components/SearchResults/SearchResults';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/detallePeli/:id" component={DetallePelis} />
      <Route path="/detalleSerie/:ids" component = {DetalleSeries}/>
      <Route path= "/Peliculas" component = {Peliculas}/>
      <Route path= "/Series" component = {Series}/>
      <Route path="/resultados/:type/:nombre" component = {SearchResults} />
      </Switch>
    </Router>
   
  );
}

export default App;
