import React, { Component } from "react";
import { Link } from "react-router-dom";

class PeliculaCartelera extends Component {  
  constructor(props){
    super(props);
    this.state = {
      verMas: false,
      textoBoton: "Ver más"
    };
  }

  cambioBoton(){
    if(this.state.verMas === false){
      this.setState({
        verMas: true,
        textoBoton: "ver menos",
      });
    } else {
      this.setState({
        verMas: false,
        textoBoton: "ver mas"
      });
    }
  }

  render(){
    return(
      <div className="serie-card">
        <img src={this.props.Pimagen} alt={this.props.Pnombre} />
        <p>Nombre: {this.props.Pnombre}</p>

        <button onClick={() => this.cambioBoton()}>{this.state.textoBoton}</button>
        {this.state.verMas === false ? null : <p>Descripción: {this.props.SDescripcion}</p>}

        <Link to={`/detalleSerie/${this.props.Sid}`}>
          <button>Ir a detalle</button>
        </Link>
      </div>
    );
  }
}

export default PeliculaCartelera;
