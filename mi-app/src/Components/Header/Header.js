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
        <SearchForm />
      </nav>
    )
}
export default Header