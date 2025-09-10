import React, { Component } from "react";
import SeriesOnAir from "../../../Components/SeriesOnAir/SeriesOnAir";
import PeliculasCartelera from "../../../Components/PeliculasCartelera/PeliculasCartelera";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";


class Peliculas extends Component {
render(){
  return(
        <React.Fragment>
          <Header/>
             <p>Peliculas en cartelera</p>
             <PeliculasCartelera/>
          <Footer/>
        </React.Fragment>
    )
}
    
}


export default Peliculas;
