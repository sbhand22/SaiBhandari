import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../../../components/Nav/Nav";
import WikiMoviesLogo from "../../../assets/WikiMovies/MoviesLogo.png";
import "./WikiMovies.css";

class WikiMoviesProject extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
  render() {
    return (
      <>
        <Nav />
        <Container>
          <div className="WikiMoviesAnimation WikiMoviesAnimationSpan">
            <b>
              <span>W</span>
              <span>i</span>
              <span>k</span>
              <span>i</span>
              <span>M</span>
              <span>o</span>
              <span>v</span>
              <span>i</span>
              <span>e</span>
              <span>s</span>
            </b>
            <Image data-aos="fade-up" src={WikiMoviesLogo} />
          </div>
          <div id="about" data-aos="fade-right" className="WikiMoviesAbout">
            <h2 className="WikiMoviesAboutHeader">About:</h2>
            <p className="WikiMoviesAboutParagraph">
              WikiMovies project can be found{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/MohamedHassan2498/WikiMovies"
              >
                here
              </a>
            </p>
            <p className="WikiMoviesAboutParagraph">
              WikiMovies is a project based on movies, tv shows and cast, built
              using ReactJs, ReduxJS and Semantic UI. The application is a multi
              page application with proper components and is Mobile Responsive.
              The Application also used proper authentication (ReduxJS) and form
              validation (Formik) and implements routing uses React Router.
            </p>
            <p className="WikiMoviesAboutParagraph">
              Live demo <a href="https://wikimovies2498.netlify.app">here!</a>
            </p>
          </div>
          Photos to be added soon
        </Container>
      </>
    );
  }
}

export default WikiMoviesProject;
