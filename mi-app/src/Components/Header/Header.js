import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"
function Header(){
    const itemsHeader= [
        {ruta:"/", name: "Home"},
        {ruta:"/favoritos", name: "Favorites"},
        {ruta:"/Series", name: "Series al aire"},
        {ruta:"/Peliculas", name: "Peliculas en cartelera"},
        {ruta: "/PeliculasTR", name: "Peliculas con mejor rating"},
        {ruta: "SeriesTR", name: "Series con mejor rating"}
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
       <h1 className="titulo"> Cinema Critics</h1>
        <SearchForm />
      </nav>
    )
}
export default Header