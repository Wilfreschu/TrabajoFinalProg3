
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Screens/Home/Home"
import DetallePelis from './Screens/Home/DetallePelis/DetallePelis';
import DetalleSeries from './Screens/Home/DetalleSeries/DetalleSeries';
import Peliculas from './Screens/Home/Peliculas/Peliculas';
import Series from './Screens/Home/Series/Series';
import SearchResults from '../../mi-app/src/Components/SearchResults/';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/detallePeli/:id" component={DetallePelis} />
      <Route path="/detalleSerie/:ids" component = {DetalleSeries}/>
      <Route path= "/Peliculas" component = {Peliculas}/>
      <Route path= "/Series" component = {Series}/>
      <Route path="/resultados/:f" component = {SearchResults} />
      </Switch>
    </Router>
   
  );
}

export default App;
