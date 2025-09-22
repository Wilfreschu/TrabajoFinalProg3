import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import SerieCard from "../SerieCard/SerieCard"
class SearchResults extends Component {
constructor(props) {
    super(props);
    this.state = {
    resultados: [],
    };
}

componentDidMount() {
    const type= this.props.match.params.type
    const nombre = this.props.match.params.nombre; 
    console.log(type)
    console.log(nombre)
        fetch(`https://api.themoviedb.org/3/search/${type}?include_adult=false&query=${nombre}&api_key=d214a519ce9ac22567ec2cd3ea1a91f0`)
  
    .then(response => response.json())
    .then((data) => {
        this.setState({
             resultados: data.results
               },
            ()=> console.log(this.state.resultados)
            );
        
    })
    .catch(error => console.log(error));
}
componentDidUpdate(prevProps) {
  const type = this.props.match.params.type;
  const nombre = this.props.match.params.nombre;

  const condition = type !== prevProps.match.params.type || nombre !== prevProps.match.params.nombre;

  condition ? fetch(`https://api.themoviedb.org/3/search/${type}?include_adult=false&query=${nombre}&api_key=d214a519ce9ac22567ec2cd3ea1a91f0`)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            resultados: data.results
          }, () => console.log(this.state.resultados));
        })
        .catch(error => console.log(error))
    : console.log("Los parámetros no cambiaron");
}


render() {
  const type = this.props.match.params.type;

  return (
    <React.Fragment>
      <Header/>
      <h2 className="titulo-grupo">Resultados de búsqueda</h2>
     <section className="card-container">
        {this.state.resultados.length === 0 ? (
          <h3 className="error404">No hay resultados con ese nombre</h3>
        ) : (
          this.state.resultados.map((item, idx) => (
            type === "movie" ? (
              <MovieCard
                key={item.id + idx}
                Imagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                Nombre={item.title}
                id={item.id}
                Descripcion={item.overview} 
              />
            ) : (
              <SerieCard 
                key={item.id + idx} 
                Imagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`} 
                Nombre={item.original_name} 
                Descripcion={item.overview} 
                id={item.id}
              />
            )
          ))
        )}
      </section>
      <Footer/>
    </React.Fragment>
  );
}
}

export default SearchResults;