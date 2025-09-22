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
  let favsPelisString = localStorage.getItem("favoritos_pelis");
  let favsPelis = JSON.parse(favsPelisString);
    let pelisArray = [];

    favsPelis.map(id => {
      fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR")
        .then(res => res.json())
        .then(data => {
            pelisArray.push(data);

            let pelisToString = JSON.stringify(pelisArray);
            localStorage.setItem("pelis_completas", pelisToString);
            let recuperoStorage = localStorage.getItem("pelis_completas");
            let pelisRecuperadas = JSON.parse(recuperoStorage);

            this.setState({ pelis: pelisRecuperadas });
          
        })
        .catch(err => console.log(err));
    });

    let favsSeriesString = localStorage.getItem("favoritos_series");
    let favsSeries = JSON.parse(favsSeriesString);
    let seriesArray = [];

    favsSeries.map(id => {
      fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR")
        .then(res => res.json())
        .then(data => {
            seriesArray.push(data);

            let seriesToString = JSON.stringify(seriesArray);
            localStorage.setItem("series_completas", seriesToString);
            let recuperoStorage = localStorage.getItem("series_completas");
            let seriesRecuperadas = JSON.parse(recuperoStorage);

            this.setState({ series: seriesRecuperadas });
          }
        )
        .catch(err => console.log(err));
    });
  }

  render(){
    return (
      <React.Fragment>
        <Header/>  
        <h2 className="titulo-grupo" >Películas Favoritas</h2>
        <section className="card-container">
        
            {this.state.pelis.length === 0 ? (
              <p className="notFound">No hay películas favoritas.</p>
            ) : this.state.pelis.map(peli => (
              <div key={peli.id} className="peli-card">
                <Link to={"/detallePeli/" + peli.id}>
                  <img src={"https://image.tmdb.org/t/p/w200" + peli.poster_path} alt={peli.title}/>
                  <p>{peli.title}</p>
                  <button>ir al detalle</button>
                </Link>
              </div>
            ))}
    
         </section>



          <h2 className="titulo-grupo" >Series Favoritas</h2>
          <section className="card-container">
            {this.state.series.length === 0 ? (
              <p className="notFoundS">No hay series favoritas.</p>
            ) : this.state.series.map(ser => (
              <div key={ser.id} className="peli-card">
              
                  <img src={"https://image.tmdb.org/t/p/w200" + ser.poster_path} alt={ser.name}/>
                  <p>{ser.name}</p>
                  <Link to={"/detalleSerie/" + ser.id}>
                  <button>ir al detalle</button>
                </Link>
              </div>
            ))}
          </section>
        

        <Footer/>
      </React.Fragment>
    );
  }
}

export default Favoritos;