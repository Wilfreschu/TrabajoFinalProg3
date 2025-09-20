import React, { Component } from "react";
import PelisHome from "../PelisHome/PelisHome";
import SeriesHome from "../SeriesHome/SeriesHome";

class FiltroHome extends Component {
  constructor() {
    super();
    this.state = { Fvalor: "" };
  }

  controlarCambios(event) {
    this.setState(
      { Fvalor: event.target.value },
    )
  }

  ejecutarBusqueda(e){
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <form className="FormFiltro" onSubmit={(e)=> this.ejecutarBusqueda(e)}>
          <label>Nombre:</label>
          <input
            type="text"
            value={this.state.Fvalor}
            onChange={(event)=> this.controlarCambios(event)}
          />
        </form>
        <PelisHome  filtro={this.state.Fvalor} />
        <SeriesHome filtro={this.state.Fvalor} />
      </section>
    );
  }
}

export default FiltroHome;