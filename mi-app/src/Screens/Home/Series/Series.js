import React, { Component } from "react";
import SeriesOnAir from "../../../Components/SeriesOnAir/SeriesOnAir";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";


class Series extends Component {
render(){
  return(
        <React.Fragment>
          <Header/>
             <p>Series Al Aire</p>
             <SeriesOnAir/>
        <Footer/>
        </React.Fragment>
    )
}
    
}


export default Series;
