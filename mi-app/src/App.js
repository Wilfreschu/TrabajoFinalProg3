
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./Screens/Home/Home"
function App() {
  return (
   <Switch>
      <Route exact path='/' component={Home} />
   </Switch>
  );
}

export default App;
