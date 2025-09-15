import React, { Component } from "react";
import "./DetallePelis.css"

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,  
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR`)
      .then(response => response.json())
      .then(data => this.setState({
        info: data,
      }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="detalle-container">
        {this.state.info === null ? (
          <h3>Cargando detalle...</h3>
        ) : (
          <div>
            <h2>{this.state.info.title}</h2>
            <img 
              src={`https://image.tmdb.org/t/p/w342${this.state.info.poster_path}`} 
              alt={this.state.info.title} 
            />
            <p><strong>Fecha de estreno:</strong> {this.state.info.release_date}</p>
            <p><strong>Duración:</strong> {this.state.info.runtime} min</p>
            <p><strong>Rating:</strong> {this.state.info.vote_average}</p>
            <p><strong>Sinópsis:</strong> {this.state.info.overview}</p>
            <p><strong>Géneros:</strong></p>
            <ul>
              {this.state.info.genres.map(g => (
              <li key={g.id}>{g.name}</li>
              ))}
            </ul>
            <button className="boton-fav">Agregar a Favoritos</button>
          </div>
        )}
      </div>
    );
  }
}

export default Detalle;
