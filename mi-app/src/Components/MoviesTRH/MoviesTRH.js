import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "../Css/Cards.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class MoviesTRH extends Component {
  constructor() {
    super();
    this.state = {
      datos: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=1`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results,
      }))
      .catch(error => console.log(error));
  }


  render() {

    return (
      <section>
        <h2 className="titulo-grupo">Películas con mejor rating</h2>
        <div className="card-container">
          {this.state.datos.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.datos.map((item, idx) => (
              idx < 4 ?   
                <MovieCard 
                  key={item.id + idx} 
                  Imagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`} 
                  Nombre={item.original_title} 
                  Descripcion={item.overview} 
                  id={item.id}/> 
              : null
            ))
          )}
        </div>
         <Link to= {'/PeliculasTR'}>
           <div className="estructura">
          <button className="VerTodas">Ver todas</button>
          </div>
        </Link>
      </section>
    );
  }
}

export default MoviesTRH;