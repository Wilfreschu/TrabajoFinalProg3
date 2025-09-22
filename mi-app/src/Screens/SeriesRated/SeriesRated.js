import React, { Component } from "react";
import SeriesTR from "../../Components/SeriesTR/SeriesTR";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


class SeriesRated extends Component {
render(){
  return(
        <React.Fragment>
          <Header/>
             <p className="titulo-grupo">Series Con Mejor Rating</p>
             <SeriesTR/>
        <Footer/>
        </React.Fragment>
    )
}
    
}


export default SeriesRated;