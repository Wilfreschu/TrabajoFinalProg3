import React, { Component } from "react";
import "./DetalleSeries.css"

class DetalleSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,  
    };
  }

  componentDidMount() {
    const id = this.props.match.params.ids;

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR`)
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
            <h2>{this.state.info.original_name}</h2>
            <img 
              src={`https://image.tmdb.org/t/p/w342${this.state.info.poster_path}`} 
            />
          </div>
        )}
      </div>
    );
  }
}

export default DetalleSeries;
