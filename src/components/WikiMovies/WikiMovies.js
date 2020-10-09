import React, { useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../Nav/Nav";
import WikiMoviesLogo from "../../assets/WikiMovies/MoviesLogo.png";
import SigninWeb from "../../assets/WikiMovies/SigninWeb.png";
import SignupWeb from "../../assets/WikiMovies/SignupWeb.png";
import SigninMobile from "../../assets/WikiMovies/SigninMobile.png";
import SignupMobile from "../../assets/WikiMovies/SignupMobile.png";
import HomeWeb from "../../assets/WikiMovies/HomeWeb.png";
import HomeMobile from "../../assets/WikiMovies/HomeMobile.png";
import DiscoverMoviesWeb from "../../assets/WikiMovies/DiscoverMoviesWeb.png";
import DiscoverMoviesMobile from "../../assets/WikiMovies/DiscoverMoviesMobile.png";
import MovieDetailsWeb from "../../assets/WikiMovies/MovieDetailsWeb.png";
import MovieDetailsMobile from "../../assets/WikiMovies/MovieDetailsMobile.png";
import TvShowDetailsWeb from "../../assets/WikiMovies/TvShowDetailsWeb.png";
import TvShowDetailsMobile from "../../assets/WikiMovies/TvShowDetailsMobile.png";
import PopularPeopleWeb from "../../assets/WikiMovies/PopularPeopleWeb.png";
import PersonDetailsWeb from "../../assets/WikiMovies/PersonDetailsWeb.png";
import PersonDetailsMobile from "../../assets/WikiMovies/PersonDetailsMobile.png";
import SearchResultWeb from "../../assets/WikiMovies/SearchResultWeb.png";
import SearchResultMobile from "../../assets/WikiMovies/SearchResultMobile.png";
import "./WikiMovies.css";

const WikiMoviesProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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
          <Image
            data-aos="fade-up"
            className="WikiMoviesLogoImage"
            src={WikiMoviesLogo}
          />
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
        <p data-aos="fade-left" className="WikiMoviesPhotosParagraph">
          Here are some photos of the project
        </p>
        <p data-aos="fade-left" className="WikiMoviesPhotosParagraph">
          Some components are a little inaccurate in the photos because of
          screenshotting but they are perfectly placed within the demo.
        </p>
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={SigninWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={SignupWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={SigninMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={SignupMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={HomeWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageSmall"
          src={HomeMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={DiscoverMoviesWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageSmall"
          src={DiscoverMoviesMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={MovieDetailsWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageSmall"
          src={MovieDetailsMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={TvShowDetailsWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageSmall"
          src={TvShowDetailsMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={PopularPeopleWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={PersonDetailsWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageSmall"
          src={PersonDetailsMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={SearchResultWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageSmall"
          src={SearchResultMobile}
        />
      </Container>
    </>
  );
};

export default WikiMoviesProject;
