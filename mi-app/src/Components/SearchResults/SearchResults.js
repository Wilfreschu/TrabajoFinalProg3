import React, { Component } from "react";
import DetallePelis from "../../Screens/Home/DetallePelis/DetallePelis";
import PeliHome from "../PeliHome/PeliHome";
class SearchResults extends Component {
constructor(props) {
    super(props);
    this.state = {
    resultados: [],
    };
}

componentDidMount() {
    
    const nombre = this.props.match.params.f; 
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&query=${nombre}&api_key=d214a519ce9ac22567ec2cd3ea1a91f0`)
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

render() {
    return (
    <div>
        <h2>Resultados de búsqueda</h2>
        {this.state.resultados.length === 0 ?
          <h3>Cargando...</h3> :
        this.state.resultados.map((item, idx) => (
        <PeliHome 
            key={item.id + idx}
            Imagen={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            Nombre={item.title}
            id={item.id}
            Descripcion={item.overview} 
        />
        ))}
    </div>
    );
}
}

export default SearchResults;