import React, { Component } from "react";
import FiltroHome from "../Filtro/Filtro";
import SerieCard from "../SerieCard/SerieCard"
class SeriesTR extends Component {
  constructor() {
    super();
    this.state = {
      datos: [],
      page: 1,     
      datosFiltradosS: [] 
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results,
        datosFiltradosS: data.results
      }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.page !== prevState.page) {
      fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState({
          datos: this.state.datos.concat(data.results),
          datosFiltradosS: this.state.datosFiltradosS.concat(data.results),
        }))
        .catch(error => console.log(error));
    }
  }
 filtrarPersonajes(textoAFiltrar) {
    let nuevoArray = this.state.datos.filter((item) =>
      item.original_name.toLowerCase().includes(textoAFiltrar.toLowerCase())

    );
    this.setState({
      datosFiltradosS: nuevoArray
    })
  }

  cargarMas() {
    this.setState({ page: this.state.page + 1});
  }

  render() {
    return (
      <div>
        <FiltroHome filtrar={(texto) => this.filtrarPersonajes(texto)} />
      <section className="card-container">
        {this.state.datos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.datosFiltradosS.map((item, idx) => (
            <SerieCard
              key={item.id + idx}
              Imagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              Nombre={item.original_name}
              id={item.id}
              Descripcion={item.overview} 
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

export default SeriesTR;