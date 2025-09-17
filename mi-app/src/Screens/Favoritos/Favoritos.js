import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header"; 
import Footer from "../../Components/Footer/Footer";  

class Favoritos extends Component {
  constructor(props){
    super(props);
    this.state = {
      pelis: [],
      series: []
    };
  }

  componentDidMount(){
    let favsPelis = localStorage.getItem("favoritos_pelis");
    favsPelis = favsPelis ? JSON.parse(favsPelis) : [];
    let pelisCompletas = []; // cambiado a let

    for(let i = 0; i < favsPelis.length; i++){
      let id = favsPelis[i];
      fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR")
        .then(res => res.json())
        .then(data => {
          if(data && data.id){ 
            pelisCompletas.push(data);
            this.setState({ pelis: pelisCompletas });
          }
        })
        .catch(err => console.log(err));
    }

    let favsSer = localStorage.getItem("favoritos_series");
    favsSer = favsSer ? JSON.parse(favsSer) : [];
    let seriesCompletas = []; // cambiado a let

    for(let j = 0; j < favsSer.length; j++){
      let idSerie = favsSer[j];
      fetch("https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR")
        .then(res => res.json())
        .then(data => {
          if(data && data.id){ 
            seriesCompletas.push(data);
            this.setState({ series: seriesCompletas });
          }
        })
        .catch(err => console.log(err));
    }
  }

  render(){
    let pelis = this.state.pelis.filter(function(peli){ return peli && peli.id; });
    let series = this.state.series.filter(function(ser){ return ser && ser.id; });

    return(
      <React.Fragment>
        <Header/>  

        <div className="favoritos-container">
          <h2>Películas Favoritas</h2>
          <div className="favoritos-grid">
            {pelis.length === 0 ? (
              <p>No hay películas favoritas.</p>
            ) : pelis.map(function(peli){
                return (
                  <div key={peli.id} className="favorito-card">
                    <Link to={"/detallePeli/" + peli.id}>
                      <img src={"https://image.tmdb.org/t/p/w200" + peli.poster_path} alt={peli.title}/>
                      <p>{peli.title}</p>
                    </Link>
                  </div>
                );
            })}
          </div>

          <h2>Series Favoritas</h2>
          <div className="favoritos-grid">
            {series.length === 0 ? (
              <p>No hay series favoritas.</p>
            ) : series.map(function(ser){
                return (
                  <div key={ser.id} className="favorito-card">
                    <Link to={"/detalleSerie/" + ser.id}>
                      <img src={"https://image.tmdb.org/t/p/w200" + ser.poster_path} alt={ser.name}/>
                      <p>{ser.name}</p>
                    </Link>
                  </div>
                );
            })}
          </div>
        </div>

        <Footer/>
      </React.Fragment>
    );
  }
}

export default Favoritos;