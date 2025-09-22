import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 

class SearchForm extends Component {
constructor() {
    super();
    this.state = {
    search: "",
    type:" ",
    };
}

controlarCambios(event) {
    this.setState(
      { search: event.target.value },
    )}
  controlarCambiosRadio(event) {
    this.setState({ type: event.target.value });
  }
ejecutarBusqueda(e){
    e.preventDefault();
    this.props.history.push("/resultados/" + this.state.type + "/" + this.state.search)
  };

render() {
    return (
    <form onSubmit={(e)=> this.ejecutarBusqueda(e)}>
        <input
            type="text"
            placeholder="Buscar pelicula/serie..."
            value={this.state.search}
            onChange={(event)=> this.controlarCambios(event)}
        />
        <div>
          <label>
            <input
              type="radio"
              name="tipo"
              value="movie"
               onChange={(e)=> this.controlarCambiosRadio(e)}
            />
            Película
          </label>
          <label>
            <input
              type="radio"
              name="tipo"
              value="tv"
              onChange={(e)=> this.controlarCambiosRadio(e)}
            />
            Serie
          </label>
        </div>
        
        <button type="submit">Buscar</button>
    </form>
    );
}
}

export default withRouter(SearchForm);
