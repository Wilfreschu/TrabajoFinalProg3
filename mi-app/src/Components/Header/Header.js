import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css"
function Header(){
    const itemsHeader= [
        {ruta:"/", name: "Home"},
        {ruta:"/favoritos", name: "Favorites"},
        {ruta:"/Series", name: "Series al aire"},
        {ruta:"/Peliculas", name: "Peliculas en cartelera"},
    ];
    return(
         <nav>
        <ul className="nav nav-tabs my-4">
            {itemsHeader.map((item) => (
                <li key= {item.ruta} className="lista" >
                    <Link to= {item.ruta}>{item.name}</Link>
                </li>
            ))}
        </ul>
       <h1 className="titulo"> CCritics</h1>
        <form className="search-form" action="results.html" method="get">
          <input type="text" name="searchData" placeholder="Buscar..." />
          <button type="submit" className="btn btn-success btn-sm">Buscar</button>
        </form>
      </nav>
    )
}
export default Header