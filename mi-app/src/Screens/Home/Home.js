import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SeriesHome from "../../Components/SeriesHome/SeriesHome";
import PelisHome from "../../Components/PelisHome/PelisHome";
import SearchForm from "../../Components/SearchForm/SearchForm";
function Home() {
  return (
    <React.Fragment>
    <div className="container">
     <Header/>
<section>

  <SeriesHome/>
  <PelisHome />
</section>
      <Footer/>
    </div>
    </React.Fragment>
  );
}

export default Home;
