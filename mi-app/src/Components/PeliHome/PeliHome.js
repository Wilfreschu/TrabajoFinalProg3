import React, { Component } from "react";
import { Link } from "react-router-dom";

class PeliHome extends Component {  
  constructor(props){
    super(props)
    this.state = {
      verMas: false,
      textoBoton: "Ver más",
      esFavorito: false
    }
  }

  componentDidMount(){
    let favs = localStorage.getItem("favoritos_pelis");
    favs = favs ? JSON.parse(favs) : [];
    let esFav = favs.includes(this.props.id);
    this.setState({ esFavorito: esFav });
  }

  cambioBoton() {
    this.setState({
      verMas: this.state.verMas ? false : true,
      textoBoton: this.state.verMas ? "ver mas" : "ver menos"
    });
}


  manejarFavorito() {
    let favs = localStorage.getItem("favoritos_pelis");
    favs = favs ? JSON.parse(favs) : [];

    let nuevosFavs = [];
    let encontrado = false;

    for(let i=0; i<favs.length; i++){
      if(favs[i] === this.props.id){
        encontrado = true;
      } else {
        nuevosFavs.push(favs[i]);
      }
    }

    if(!encontrado){
      nuevosFavs.push(this.props.id);
    }

    localStorage.setItem("favoritos_pelis", JSON.stringify(nuevosFavs));
    this.setState({ esFavorito: !this.state.esFavorito });
  }

  render(){
    return(
      <div className="peli-card">
        <img src={this.props.Imagen} alt="" />
        <p>{this.props.Nombre}</p>
        <button onClick={() => this.cambioBoton()}>{this.state.textoBoton}</button>
        {this.state.verMas === false ? null : <p>Descripcion {this.props.Descripcion}</p>}

        <button onClick={() => this.manejarFavorito()}>
          {this.state.esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </button>

        <Link to={`/detallePeli/${this.props.id}`}>
          <button>Ir a detalle</button>
        </Link>
      </div>
    )
  }
}

export default PeliHome;