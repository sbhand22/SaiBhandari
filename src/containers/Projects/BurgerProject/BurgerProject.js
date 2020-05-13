import React, { Component } from "react";
import { List, Container, Image } from "semantic-ui-react";
import "./BurgerProject.css";
import { Link } from "react-router-dom";
import BurgerLogo from "../../../assets/Burger/burgerProject.png";
import ImageOne from "../../../assets/Burger/FirstPicture.jpg";
import ImageTwo from "../../../assets/Burger/FirstPictureMobile.jpg";
import ImageThree from "../../../assets/Burger/SecondPicture.png";
import ImageFour from "../../../assets/Burger/ThirdPicture.png";

class BurgerProject extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container>
        <Container className="BurgerNavContainer">
          <a href="/home" className="BurgerHomeLogo">
            <span className="BurgerNameSpan">MH</span>
          </a>
          <List horizontal>
            <List.Item>
              <List.Content>
                <Link to="/home">
                  <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                    Home
                  </span>
                </Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Link to="/home/#projects">
                  <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                    Projects
                  </span>
                </Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Link to="/home/#contact">
                  <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                    Contact
                  </span>
                </Link>
              </List.Content>
            </List.Item>
          </List>
        </Container>
        <Container>
          <div style={{ padding: "5em 1.5em", textAlign: "center" }}>
            <h1 className="BurgerNameInfo">Burger Builder</h1>
            <Image className="BurgerImageLogo" src={BurgerLogo} />
          </div>
          <div id="about" className="BurgerAboutContent">
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
              Application also used proper authentication and from validation
              and implements routing uses React Router.
            </p>

            <p className="BurgerAboutParagraph">
              Here are some photos of the project
            </p>
          </div>
          <Image className="BurgerCustomizeImageLarge" src={ImageOne} />
          <Image className="BurgerCustomizeImageLarge" src={ImageTwo} />
          <Image className="BurgerCustomizeImageLarge" src={ImageThree} />
          <Image className="BurgerCustomizeImageLarge" src={ImageFour} />
        </Container>
      </Container>
    );
  }
}

export default BurgerProject;
