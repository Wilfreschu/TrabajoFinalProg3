import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Error(){
    return(
          <React.Fragment>
            <Header/>
            <h1 className="error404">Esta pagina no existe</h1>
            <Footer/>
          </React.Fragment>
    )
}
export default Error