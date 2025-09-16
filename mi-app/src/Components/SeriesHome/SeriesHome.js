import React, {Component} from "react";
import PeliHome from "../SerieHome/SerieHome";
import SerieHome from "../SerieHome/SerieHome";

class SeriesHome extends Component {
  constructor (){
    super()
    this.state= {
      datos: [],
    }
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=1`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results,
      }))
      .catch(error => console.log(error));
  }



render(){
  return (
    <section>
      <h2 className="titulo-grupo">Series al aire</h2>
      <div className="card-container">
        {this.state.datos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.datos.map((item, idx) => (
            idx < 4 ?   
              <SerieHome 
                key={item.id + idx} 
                Imagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`} 
                Nombre={item.original_name} 
                Descripcion={item.overview} 
                id={item.id}/> 
            : null
          ))
        )}
      </div>
    </section>
  );
}
}
export default SeriesHome;