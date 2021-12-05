import React, { useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../Nav/Nav";
import SnuggsCommerceLogo from "../../assets/SnuggsCommerce/SnuggsLogo.png";
import HomePageWeb from "../../assets/SnuggsCommerce/HomePageWeb.png";
import HomePageMobile from "../../assets/SnuggsCommerce/HomePageMobile.png";
import CategoryWeb from "../../assets/SnuggsCommerce/CategoryWeb.png";
import CategoryMobile from "../../assets/SnuggsCommerce/CategoryMobile.png";
import ProductWeb from "../../assets/SnuggsCommerce/ProductWeb.png";
import ProductMobile from "../../assets/SnuggsCommerce/ProductMobile.png";
import CartEmptyWeb from "../../assets/SnuggsCommerce/CartEmptyWeb.png";
import CartEmptyMobile from "../../assets/SnuggsCommerce/CartEmptyMobile.png";
import CartWeb from "../../assets/SnuggsCommerce/CartWeb.png";
import CartMobile from "../../assets/SnuggsCommerce/CartMobile.png";
import ContactUsWeb from "../../assets/SnuggsCommerce/ContactUsWeb.png";
import ContactUsMobile from "../../assets/SnuggsCommerce/ContactUsMobile.png";
import ReturnWeb from "../../assets/SnuggsCommerce/ReturnWeb.png";
import ReturnMobile from "../../assets/SnuggsCommerce/ReturnMobile.png";
import OurStoryWeb from "../../assets/SnuggsCommerce/OurStoryWeb.png";
import OurStoryMobile from "../../assets/SnuggsCommerce/OurStoryMobile.png";
import FAQsWeb from "../../assets/SnuggsCommerce/FAQsWeb.png";
import FAQsMobile from "../../assets/SnuggsCommerce/FAQsMobile.png";
import CreateAccountWeb from "../../assets/SnuggsCommerce/CreateAccountWeb.png";
import CreateAccountMobile from "../../assets/SnuggsCommerce/CreateAccountMobile.png";
import LoginWeb from "../../assets/SnuggsCommerce/LoginWeb.png";
import LoginMobile from "../../assets/SnuggsCommerce/LoginMobile.png";
import PreviousPurchasesWeb from "../../assets/SnuggsCommerce/PreviousPurchasesWeb.png";
import "./SnuggsCommerce.css";

const SnuggsCommerceProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Nav />
      <Container>
        <div className="SnuggsCommerceAnimation SnuggsCommerceAnimationSpan">
          <b>
            <span>S</span>
            <span>n</span>
            <span>u</span>
            <span>g</span>
            <span>g</span>
            <span>s</span>&nbsp;
            <span>C</span>
            <span>o</span>
            <span>m</span>
            <span>m</span>
            <span>e</span>
            <span>r</span>
            <span>c</span>
            <span>e</span>
          </b>
          <Image
            data-aos="fade-up"
            className="SnuggsCommerceLogoImage"
            src={SnuggsCommerceLogo}
          />
        </div>
        <div id="about" data-aos="fade-right" className="SnuggsCommerceAbout">
          <h2 className="SnuggsCommerceAboutHeader">About:</h2>
          <p className="SnuggsCommerceAboutParagraph">
            Snuggs Commerce project can be found{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/MohamedHassan98/E-Commerce"
            >
              here
            </a>
          </p>
          <p className="SnuggsCommerceAboutParagraph">
            Snuggs Clone is a project based on being an online shop, built using
            HTML, CSS, Ant Design, ReactJS and ReduxJS. The application is a
            multi-page application and is Mobile Responsive. The application
            also used proper authentication (ReduxJS) and form validation
            (Formik) and implements routing using React Router.
          </p>
          <p className="SnuggsCommerceAboutParagraph">
            Live demo <a href="https://snuggs-commerce.netlify.app/">here!</a>
          </p>
        </div>
        <p data-aos="fade-left" className="SnuggsCommercePhotosParagraph">
          Here are some photos of the project
        </p>
        <p data-aos="fade-left" className="SnuggsCommercePhotosParagraph">
          Some components are a little inaccurate in the photos because of
          screenshotting but they are perfectly placed within the demo.
        </p>
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={HomePageWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CategoryWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={ProductWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CartEmptyWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CartWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={ContactUsWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={ReturnWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={OurStoryWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={FAQsWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CreateAccountWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={LoginWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={PreviousPurchasesWeb}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={HomePageMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CategoryMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={ProductMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CartEmptyMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CartMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={ContactUsMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={ReturnMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={OurStoryMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={FAQsMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={CreateAccountMobile}
        />
        <Image
          data-aos="fade-left"
          className="WikiMoviesCustomizeImageLarge"
          src={LoginMobile}
        />
      </Container>
    </>
  );
};

export default SnuggsCommerceProject;
