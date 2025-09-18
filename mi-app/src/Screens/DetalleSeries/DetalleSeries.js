import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class DetalleSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      esFavorito: false
    };
  }

  componentDidMount() {
    let id = this.props.match.params.ids;

    fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR")
      .then(res => res.json())
      .then((data) => {
        let favs = localStorage.getItem("favoritos_series");
        favs = favs ? JSON.parse(favs) : [];

        let esFav = false;
        for(let i = 0; i < favs.length; i++){
          if(favs[i] === data.id){
            esFav = true;
          }
        }

        this.setState({
          info: data,
          esFavorito: esFav
        });
      })
      .catch(err => console.log(err));
  }

  manejarFavorito() {
    let info = this.state.info;
    if(info === null) return;

    let favs = localStorage.getItem("favoritos_series");
    favs = favs ? JSON.parse(favs) : [];

    let encontrado = false;
    let nuevosFavs = [];
    for(let i = 0; i < favs.length; i++){
      if(favs[i] === info.id){
        encontrado = true;
      } else {
        nuevosFavs[nuevosFavs.length] = favs[i];
      }
    }
    if(!encontrado){
      nuevosFavs[nuevosFavs.length] = info.id;
    }

    localStorage.setItem("favoritos_series", JSON.stringify(nuevosFavs));

    this.setState({
      esFavorito: !this.state.esFavorito
    });
  }

  render() {
    let info = this.state.info;

    return (
      <React.Fragment>
        <Header/>
        <div className="peli-detalle">
          {info === null ? (
            <h3>Cargando detalle...</h3>
          ) : (
            <div>
              <h2>{info.original_name}</h2>
              <img
                src={"https://image.tmdb.org/t/p/w342" + info.poster_path}
                alt={info.original_name}
              />
              <p><strong>Fecha de estreno:</strong> {info.first_air_date ? info.first_air_date : "No disponible"}</p>
              <p><strong>Rating:</strong> {info.vote_average ? info.vote_average : "No disponible"}</p>
              <p><strong>Sinópsis:</strong> {info.overview ? info.overview : "No disponible"}</p>
              <p><strong>Géneros:</strong></p>
              <ul>
                {info.genres && info.genres.length > 0 ? (function(){
                  let lista = [];
                  for(let i = 0; i < info.genres.length; i++){
                    lista[lista.length] = <li key={info.genres[i].id}>{info.genres[i].name}</li>;
                  }
                  return lista;
                })() : <li>No hay géneros disponibles</li>}
              </ul>
              <button onClick={() => this.manejarFavorito()}>
                {this.state.esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
              </button>
            </div>
          )}
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}
export default DetalleSeries;
