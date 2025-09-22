import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SeriesHome from "../../Components/SeriesHome/SeriesHome";
import PelisHome from "../../Components/PelisHome/PelisHome";
import SearchForm from "../../Components/SearchForm/SearchForm";
import MoviesTRH from "../../Components/MoviesTRH/MoviesTRH";
import SeriesTRH from "../../Components/SeriesTRH/SeriesTRH";
function Home() {
  return (
    <React.Fragment>
    <div className="container">
     <Header/>
<section>
  <PelisHome/>
  <MoviesTRH/>
  <SeriesHome/>
  <SeriesTRH/>
</section>
      <Footer/>
    </div>
    </React.Fragment>
  );
}

export default Home;
