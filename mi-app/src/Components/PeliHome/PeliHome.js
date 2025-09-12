import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PeliHome.css"

class PeliHome extends Component {  
  constructor (props){
    super(props)
    this.state= {
      verMas : false,
      textoBoton : "Ver más"
    }
  }

  cambioBoton(){
    if(this.state.verMas == false){
      this.setState({
        verMas: true,
        textoBoton: "ver menos",
      })
    } else {
      this.setState({
        verMas: false,
        textoBoton: "ver mas"
      })
    }
  }

  render(){
    return(
      <div className="peli-card">
        <img src={this.props.Imagen} alt="" />
        <p>{this.props.Nombre}</p>
        <button onClick={()=> this.cambioBoton()}>{this.state.textoBoton}</button>
        {this.state.verMas==false ? null : <p>Descripcion {this.props.Descripcion}</p>}
        <Link to={`/detallePeli/${this.props.id}`}>
          <button>Ir a detalle</button>
        </Link>
      </div>
    )
  }
}

export default PeliHome;
