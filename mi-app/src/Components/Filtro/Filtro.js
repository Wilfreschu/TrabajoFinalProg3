import React, { Component } from "react";
import PeliculasCartelera from "../PeliculasCartelera/PeliculasCartelera";
import SeriesOnAir from "../SeriesOnAir/SeriesOnAir";

class FiltroHome extends Component {
  constructor() {
    super();
    this.state = { Fvalor: "" };
  }

  controlarCambios(event) {
    this.setState(
      { Fvalor: event.target.value }, () => this.props.filtrar(this.state.Fvalor)
    )
  }

  ejecutarBusqueda(e){
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <form className="FormFiltro" onSubmit={(e)=> this.ejecutarBusqueda(e)}>
          <label className="filtro">Nombre:</label>
          
          <input
            type="text"
            value={this.state.Fvalor}
            placeholder="Filtrar..."
            onChange={(event)=> this.controlarCambios(event)}
          />
        </form>
      </section>
    );
  }
}

export default FiltroHome;