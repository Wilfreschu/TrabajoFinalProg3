import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 

class SearchForm extends Component {
constructor() {
    super();
    this.state = {
    search: ""
    };
}

controlarCambios(event) {
    this.setState(
      { search: event.target.value },
    )}
ejecutarBusqueda(e){
    e.preventDefault();
    this.props.history.push("/Filtro/" + this.state.search)
  };

render() {
    return (
    <form onSubmit={(e)=> this.ejecutarBusqueda(e)}>
        <input
            type="text"
            placeholder="Buscar pelidula..."
            value={this.state.search}
            onChange={(event)=> this.controlarCambios(event)}
        />
        <button type="submit">Buscar</button>
    </form>
    );
}
}

export default withRouter(SearchForm);
