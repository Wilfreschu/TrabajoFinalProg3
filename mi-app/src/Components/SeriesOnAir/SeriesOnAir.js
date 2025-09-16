import React, { Component } from "react";
import SerieOnAir from "../SerieOnAir/SerieOnAir";
import "./Series.css"
class SeriesOnAir extends Component {
  constructor() {
    super();
    this.state = {
      datos: [],
      page: 1,     
      cargar: false  
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results
      }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.page !== prevState.page) {
      fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState({
          datos: this.state.datos.concat(data.results),
          cargar: false
        }))
        .catch(error => console.log(error));
    }
  }

  cargarMas() {
    this.setState({ page: this.state.page + 1, cargar: true });
  }

  render() {
    return (
      <section className="card-container">
        {this.state.datos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.datos.map((item, idx) => (
            <SerieOnAir
              key={item.id + idx}
              Simagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              Snombre={item.original_name}
              Sid={item.id}
              SDescripcion={item.overview} 
            />
          ))
        )}
        <button className="nextSeries"onClick={() => this.cargarMas()}>Next</button>
      </section>
    );
  }
}

export default SeriesOnAir;
