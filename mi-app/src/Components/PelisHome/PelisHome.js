import React, {Component} from "react";
import PeliHome from "../PeliHome/PeliHome";

class PelisHome extends Component {
  constructor (){
    super()
    this.state= {
      datos: [],
      next: "",
      cargar: false 
    }
  }

  componentDidMount(){
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then(data => this.setState({
        datos: data.results,
        next: data.info.next
      }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.cargar && this.state.cargar !== prevState.cargar) {
      fetch(this.state.next)
        .then(response => response.json())
        .then(data => this.setState({
          datos: this.state.datos.concat(data.results),
          next: data.info.next,
          cargar: false 
        }))
        .catch(error => console.log(error));
    }
  }

  cargarMas = () => {
    this.setState({ cargar: true });
  }

  render(){
    return (
      <section className="card-container">
        {this.state.datos==" " ?
          <h3>Cargando...</h3> :
          this.state.datos.map((item,idx)=> (
            <Morty 
              key={item.id + idx} 
              funcion={this.cargarMas}
              Mimagen={item.image} 
              Mnombre={item.name} 
              Mstatus={item.status} 
              id={item.id}/>
          ))
        }

        {this.state.next && (
          <button onClick={this.cargarMas}>Next</button>
        )}
      </section>
    );
  }
}

export default PelisHome;
