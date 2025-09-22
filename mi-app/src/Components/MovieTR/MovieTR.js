import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieTR extends Component {  
  constructor(props){
    super(props);
    this.state = {
      verMas: false,
      textoBoton: "Ver más"
    };
  }

cambioBoton() {
  this.setState({
    verMas: this.state.verMas ? false : true,
    textoBoton: this.state.verMas ? "ver mas" : "ver menos"
  });
}


  render(){
    return(
      
        <div className="peli-card">
          <img src={this.props.Pimagen} alt={this.props.Pnombre} />
          <p> {this.props.Pnombre}</p>

          <button onClick={() => this.cambioBoton()}>{this.state.textoBoton}</button>
          {this.state.verMas === false ? null : <p>Descripción: {this.props.PDescripcion}</p>}

          <Link to={`/detallePeli/${this.props.Pid}`}>
            <button>Ir a detalle</button>
          </Link>
        </div>

    );
  }
}

export default MovieTR;