import React, { useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../Nav/Nav";
import TrilloLogo from "../../assets/Trillo/TrilloLogo.png";
import TrilloImage from "../../assets/Trillo/TrilloImage.png";
import TrilloImageMobile from "../../assets/Trillo/TrilloImageMobile.png";
import "./Trillo.css";

const Trillo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Nav />
      <Container>
        <div className="TrilloAnimation TrilloAnimationSpan">
          <b>
            <span>T</span>
            <span>r</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
          </b>
          <Image
            data-aos="fade-up"
            className="TrilloLogoImage"
            src={TrilloLogo}
          />
        </div>
        <div id="about" data-aos="fade-right" className="TrilloAbout">
          <h2 className="TrilloAboutHeader">About:</h2>
          <p className="TrilloAboutParagraph">
            Trillo project can be found{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/MohamedHassan2498/Trillo"
            >
              here
            </a>
          </p>
          <p className="TrilloAboutParagraph">
            Trillo is a project based on advertising for a booking website,
            built using only HTML and CSS. The application is a single page
            application is Mobile Responsive. The Application was also built
            using SCSS and used it as a training to master flexbox and advanced
            responsive design
          </p>
          <p className="TrilloAboutParagraph">
            Live demo{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://trillolandingpage.netlify.app/"
            >
              here!
            </a>
          </p>
        </div>
        <p data-aos="fade-left" className="TrilloPhotosParagraph">
          Here are some photos of the project
        </p>
        <Image
          data-aos="fade-left"
          className="TrilloCustomizeImageLarge"
          src={TrilloImage}
        />
        <Image
          data-aos="fade-left"
          className="TrilloCustomizeImageLarge"
          src={TrilloImageMobile}
        />
      </Container>
    </>
  );
};

export default Trillo;
