import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../../../components/Nav/Nav";
import BurgerLogo from "../../../assets/Burger/burgerProject.png";
import ImageOne from "../../../assets/Burger/FirstPicture.jpg";
import ImageTwo from "../../../assets/Burger/FirstPictureMobile.jpg";
import ImageThree from "../../../assets/Burger/SecondPicture.png";
import ImageFour from "../../../assets/Burger/ThirdPicture.png";
import "./BurgerProject.css";

class BurgerProject extends Component {
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
          <div className="BurgerAnimation BurgerAnimationSpan">
            <b>
              <span>B</span>
              <span>u</span>
              <span>r</span>
              <span>g</span>
              <span>e</span>
              <span>r</span>&nbsp;
              <span>B</span>
              <span>u</span>
              <span>i</span>
              <span>l</span>
              <span>d</span>
              <span>e</span>
              <span>r</span>
            </b>
            <Image
              data-aos="fade-up"
              className="BurgerImageLogo"
              src={BurgerLogo}
            />
          </div>
          <div id="about" data-aos="fade-right" className="BurgerAbout">
            <h2 className="BurgerAboutHeader">About:</h2>
            <p className="BurgerAboutParagraph">
              My burger project can be found{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/MohamedHassan2498/React-Burger-Project"
              >
                here
              </a>
            </p>
            <p className="BurgerAboutParagraph">
              Burger Builder is a project based on Maximilian Schwarzmüller's
              Udemy course{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              >
                https://www.udemy.com/course/react-the-complete-guide-incl-redux/
              </a>
              , built using ReactJs and ReduxJs. The application uses all the
              new features introduced in ES6. The application is a single page
              application with proper components and is Mobile Responsive. The
              Application also used proper authentication and form validation
              and implements routing uses React Router.
            </p>
          </div>
          <p data-aos="fade-left" className="BurgerPhotosParagraph">
            Here are some photos of the project:
          </p>
          <Image
            data-aos="fade-left"
            className="BurgerCustomizeImageLarge"
            src={ImageOne}
          />
          <Image
            data-aos="fade-left"
            className="BurgerCustomizeImageLarge"
            src={ImageTwo}
          />
          <Image
            data-aos="fade-left"
            className="BurgerCustomizeImageLarge"
            src={ImageThree}
          />
          <Image
            data-aos="fade-left"
            className="BurgerCustomizeImageLarge"
            src={ImageFour}
          />
        </Container>
      </>
    );
  }
}

export default BurgerProject;
