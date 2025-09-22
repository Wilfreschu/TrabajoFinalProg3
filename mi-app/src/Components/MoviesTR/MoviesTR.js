import React, { Component } from "react";

import MovieTR from "../MovieTR/MovieTR";
import FiltroHome from "../Filtro/Filtro";
class MoviesTR extends Component {
  constructor() {
    super();
    this.state = {
      datos: [],
      page: 1,     
      cargar: false,
      datosFiltrados: []  
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results,
        datosFiltrados: data.results
      }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.page !== prevState.page) {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState({
          datos: this.state.datos.concat(data.results),
          cargar: false,
          datosFiltrados: this.state.datosFiltrados.concat(data.results),
        }))
        .catch(error => console.log(error));
    }
  }
    filtrarPersonajes(textoAFiltrar) {
    let nuevoArray = this.state.datos.filter((item) =>
      item.original_title.toLowerCase().includes(textoAFiltrar.toLowerCase())

    );
    this.setState({
      datosFiltrados: nuevoArray
    })
  }


  cargarMas() {
    this.setState({ page: this.state.page + 1, cargar: true });
  }

  render() {

    return (
      <div>
        <FiltroHome filtrar={(texto) => this.filtrarPersonajes(texto)} />
      <section className="card-container">
        
        {this.state.datos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          
          this.state.datosFiltrados.map((item, idx) => (
            <MovieTR
              key={item.id + idx}
              Pimagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              Pnombre={item.original_title}
              Pid={item.id}
              PDescripcion={item.overview} 
            />
          ))
        )}
      </section>
      <div className="estructura">
      <button className="next" onClick={() => this.cargarMas()}>Next</button>
      </div>
      </div>
    );
  }
}

export default MoviesTR;