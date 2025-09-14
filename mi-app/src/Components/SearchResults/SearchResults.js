import React, { Component } from "react";
import DetallePelis from "../../Components/DetallePelis/DetallePelis";
class SearchResults extends Component {
constructor(props) {
    super(props);
    this.state = {
    resultados: "",
    };
}

componentDidMount() {
    const nombre = this.props.match.params.f; 
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d214a519ce9ac22567ec2cd3ea1a91f0&language=es-AR&page=${nombre}`)
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
        {this.state.resultados=="" ?
          <h3>Cargando...</h3> :
        this.state.resultados.map((item) => (
        <DetallePelis 
            key={item.id}
            Mimagen={item.image}
            Mnombre={item.name}
            Mstatus={item.status}
            id={item.id}
        />
        ))}
    </div>
    );
}
}

export default DetallePelis;