import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header"; 
import Footer from "../../Components/Footer/Footer";  
import Pelifavs from "../../Components/PeliFavs/PeliFavs"
import SerieFavs from "../../Components/SerieFavs/SerieFavs";


class Favoritos extends Component {
  constructor(props){
    super(props);
    this.state = {
      pelis: [],
      series: [],
      esFavorito: false
    };
  }

componentDidMount(){
  let favs = localStorage.getItem("favoritos_series");
  let favsPelisString = localStorage.getItem("favoritos_pelis");

  if (favs || favsPelisString) {
    favs = favs ? JSON.parse(favs) : [];
    let esFav = favs.includes(this.props.id);

    let favsPelis = JSON.parse(favsPelisString || "[]");
    let pelisArray = [];

    favsPelis
      .filter(id => id != null) 
      .map(id => {
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR")
          .then(res => res.json())
          .then(data => {
              pelisArray.push(data);

              let pelisToString = JSON.stringify(pelisArray);
              localStorage.setItem("pelis_completas", pelisToString);
              let recuperoStorage = localStorage.getItem("pelis_completas");
              let pelisRecuperadas = JSON.parse(recuperoStorage);

              this.setState({ pelis: pelisRecuperadas, esFavorito: esFav  });
          })
          .catch(err => console.log(err));
      });

    let favsSeriesString = localStorage.getItem("favoritos_series");
    let favsSeries = JSON.parse(favsSeriesString || "[]");
    let seriesArray = [];

    favsSeries
      .filter(id => id != null) 
      .map(id => {
        fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR")
          .then(res => res.json())
          .then(data => {
              seriesArray.push(data);

              let seriesToString = JSON.stringify(seriesArray);
              localStorage.setItem("series_completas", seriesToString);
              let recuperoStorage = localStorage.getItem("series_completas");
              let seriesRecuperadas = JSON.parse(recuperoStorage);

              this.setState({ series: seriesRecuperadas, esFavorito: esFav });
            }
          )
          .catch(err => console.log(err));
      });
  }
}


  manejarFavorito() {
    let favs = localStorage.getItem("favoritos_series");
    favs = favs ? JSON.parse(favs) : [];

    let nuevosFavs = [];
    let encontrado = false;

    for(let i=0; i<favs.length; i++){
      if(favs[i] === this.props.id){
        encontrado = true;
      } else {
        nuevosFavs.push(favs[i]);
      }
    }

    if(!encontrado){
      nuevosFavs.push(this.props.id);
    }

    localStorage.setItem("favoritos_series", JSON.stringify(nuevosFavs));
    this.setState({ esFavorito: !this.state.esFavorito });
  }

  actualizarPelis(id){
    let nuevoArray = this.state.pelis.filter(peli => peli.id !== id)
    this.setState({
      pelis: nuevoArray
    })
  }
  actualizarSeries(id){
    let nuevoArray = this.state.series.filter(ser => ser.id !== id);
    this.setState({ series: nuevoArray });
  }

  render(){
    return (
      <React.Fragment>
        <Header/>  
        <h2 className="titulo-grupo" >Películas Favoritas</h2>
        <section className="card-container">
        
            {this.state.pelis.length === 0 ? (
              <p className="notFound">No hay películas favoritas.</p>
            ) : this.state.pelis.map((peli,idx) => (
              <Pelifavs 
                  key={peli.id + idx}
                  Imagen={`https://image.tmdb.org/t/p/w342${peli.poster_path}`} 
                  Nombre={peli.original_title} 
                  Descripcion={peli.overview} 
                  id={peli.id}
                  actualizarPelis={(id) => this.actualizarPelis(id)}/> 
            ))}    
         </section>

          <h2 className="titulo-grupo" >Series Favoritas</h2>
          <section className="card-container">
            {this.state.series.length === 0 ? (
              <p className="notFoundS">No hay series favoritas.</p>
            ) : this.state.series.map((ser,idx) => (
                 <SerieFavs
                      key={ser.id + idx} 
                      Imagen={`https://image.tmdb.org/t/p/w342${ser.poster_path}`} 
                      Nombre={ser.original_name} 
                      Descripcion={ser.overview} 
                      id={ser.id}
                      actualizarSeries={(id) => this.actualizarSeries(id)}/> 
            ))}
          </section>
        

        <Footer/>
      </React.Fragment>
    );
  }
}

export default Favoritos;
