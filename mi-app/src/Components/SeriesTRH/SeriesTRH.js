import React, {Component} from "react";
import SerieTRH from "../SerieTRH/SerieTRH";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SeriesTRH extends Component {
  constructor (){
    super()
    this.state= {
      datos: [],
    }
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=1`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results,
      }))
      .catch(error => console.log(error));
  }

render(){
  return (
    <section>
      <h2 className="titulo-grupo">Series con mejor rating</h2>
      <div className="card-container">
        {this.state.datos.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.datos.map((item, idx) => (
            idx < 4 ?   
              <SerieTRH 
                key={item.id + idx} 
                Imagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`} 
                Nombre={item.original_name} 
                Descripcion={item.overview} 
                id={item.id}/> 
            : null
          ))
        )}
      </div>
      <Link to={'/SeriesTR'}>
        <div className="estructura">
          <button className="VerTodas">Ver todas</button>
          </div>
      </Link>
    </section>
  );
}
}
export default SeriesTRH;