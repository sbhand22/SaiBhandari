import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../../../components/Nav/Nav";
import NatoursLogo from "../../../assets/Natours/NatoursLogo.png";
import NatoursImage from "../../../assets/Natours/NatoursImage.png";
import NatoursImageMobile from "../../../assets/Natours/NatoursImageMobile.png";
import NatoursNav from "../../../assets/Natours/NatoursNav.png";
import NatoursNavMobile from "../../../assets/Natours/NatoursNavMobile.png";
import "./Natours.css";

class Natours extends Component {
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
          <div className="NatoursAnimation NatoursAnimationSpan">
            <b>
              <span>N</span>
              <span>a</span>
              <span>t</span>
              <span>o</span>
              <span>u</span>
              <span>r</span>
              <span>s</span>
            </b>
            <Image data-aos="fade-up" src={NatoursLogo} />
          </div>
          <div id="about" data-aos="fade-right" className="NatoursAbout">
            <h2 className="NatoursAboutHeader">About:</h2>
            <p className="NatoursAboutParagraph">
              Natours project can be found{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/MohamedHassan2498/Natours"
              >
                here
              </a>
            </p>
            <p className="NatoursAboutParagraph">
              Natours is a project based on advertising for a travel agency,
              built using only HTML and CSS. The application is a single page
              application is Mobile Responsive. The Application was also built
              using SCSS and used it as a training to master animation and
              advanced responsive design
            </p>
            <p className="NatoursAboutParagraph">
              Live demo{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://natourlandingpage.netlify.app/"
              >
                here!
              </a>
            </p>
          </div>
          <p data-aos="fade-left" className="NatoursPhotosParagraph">
            Here are some photos of the project
          </p>
          <Image
            data-aos="fade-left"
            className="NatoursCustomizeImageLarge"
            src={NatoursImage}
          />
          <Image
            data-aos="fade-left"
            className="NatoursCustomizeImageLarge"
            src={NatoursImageMobile}
          />
          <Image
            data-aos="fade-left"
            className="NatoursCustomizeImageLarge"
            src={NatoursNav}
          />
          <Image
            data-aos="fade-left"
            className="NatoursCustomizeImageLarge"
            src={NatoursNavMobile}
          />
        </Container>
      </>
    );
  }
}

export default Natours;
