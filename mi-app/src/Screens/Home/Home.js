import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
    <div className="container">
     <Header/>

      <h2 className="alert alert-primary">Popular movies this week</h2>
      <section className="row cards" id="movies">
        <article className="single-card-movie">
          <img src="https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg" className="card-img-top" alt="..." />
          <div className="cardBody">
            <h5 className="card-title">The Thursday Murder Club</h5>
            <p className="card-text">
              A group of senior sleuths passionate about solving cold cases get plunged into a real-life murder mystery in this comic crime caper.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-primary">🩶</button>
          </div>
        </article>

        <article className="single-card-movie">
          <img src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg" className="card-img-top" alt="..." />
          <div className="cardBody">
            <h5 className="card-title">F1</h5>
            <p className="card-text">
              Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-primary">♥️</button>
          </div>
        </article>

        <article className="single-card-movie">
          <img src="https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg" className="card-img-top" alt="..." />
          <div className="cardBody">
            <h5 className="card-title">I Know What You Did Last Summer</h5>
            <p className="card-text">
              When five friends inadvertently cause a deadly car accident, they cover up their involvement and make a pact to keep it a secret rather than face the consequences. A year later, their past comes back to haunt them and they're forced to confront a horrifying truth: someone knows what they did last summer…and is hell-bent on revenge.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-primary">♥️</button>
          </div>
        </article>

        <article className="single-card-movie">
          <img src="https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg" className="card-img-top" alt="..." />
          <div className="cardBody">
            <h5 className="card-title">Superman</h5>
            <p className="card-text">
              Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-primary">♥️</button>
          </div>
        </article>
      </section>

      <h2 className="alert alert-primary">Movies now playing</h2>
      <section className="row cards" id="now-playing">
        <article className="single-card-playing">
          <img src="https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg" className="card-img-top" alt="..." />
          <div className="cardBody">
            <h5 className="card-title">War of the Worlds</h5>
            <p className="card-text">
              Will Radford is a top analyst for Homeland Security who tracks potential threats through a mass surveillance program, until one day an attack by an unknown entity leads him to question whether the government is hiding something from him... and from the rest of the world.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-primary">🩶</button>
          </div>
        </article>

        <article className="single-card-playing">
          <img src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg" className="card-img-top" alt="..." />
          <div className="cardBody">
            <h5 className="card-title">F1</h5>
            <p className="card-text">
              Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.
            </p>
            <Link to="/movie" className="btn btn-primary">Ver más</Link>
            <button className="btn alert-primary">♥️</button>
          </div>
        </article>

        {/* Repetí la misma conversión para el resto de secciones: "single-card-playing", "single-card-tv" y "single-card-on-air" */}
      </section>
      <Footer/>
    </div>
    </React.Fragment>
  );
}

export default Home;
