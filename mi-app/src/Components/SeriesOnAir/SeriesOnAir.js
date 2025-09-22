import React, { Component } from "react";
import SerieOnAir from "../SerieOnAir/SerieOnAir";
import "./SeriesOnAir.css"
import FiltroHome from "../Filtro/Filtro";
class SeriesOnAir extends Component {
  constructor() {
    super();
    this.state = {
      datos: [],
      page: 1,     
      cargar: false , 
      datosFiltradosS: [] 
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results,
        datosFiltradosS: data.results
      }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.page !== prevState.page) {
      fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${this.state.page}`)
        .then(response => response.json())
        .then(data => this.setState({
          datos: this.state.datos.concat(data.results),
          cargar: false,
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
          this.state.datosFiltradosS.map((item, idx) => (
            <SerieOnAir
              key={item.id + idx}
              Simagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              Snombre={item.original_name}
              Sid={item.id}
              SDescripcion={item.overview} 
            />
          ))
        )}
        </section>
        <button className="next"onClick={() => this.cargarMas()}>Next</button>
    
        </div>
    );
  }
}

export default SeriesOnAir;
