import React, { Component } from "react";
import SeriesOnAir from "../../Components/SeriesOnAir/SeriesOnAir";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FiltroHome from "../../Components/Filtro/Filtro";
import MoviesTR from "../../Components/MoviesTR/MoviesTR";


class PeliculasTR extends Component {
render(){
  return(
        <React.Fragment>
          <Header/>
             <p className="titulo-grupo">Peliculas con mejor rating</p>
             <MoviesTR/>
          <Footer/>
        </React.Fragment>
    )
}
    
}


export default PeliculasTR;