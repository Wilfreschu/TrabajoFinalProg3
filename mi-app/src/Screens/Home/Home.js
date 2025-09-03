import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movies">Películas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/series">Series</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favoritas</Link>
        </li>
      </ul>
      <form className="search-form">
        <input type="text" name="searchData" placeholder="Buscar..." />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    </nav>
  );
}

export default Home;
