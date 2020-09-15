import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import AOS from "aos";
import Nav from "../../../components/Nav/Nav";
import SlackLogo from "../../../assets/Slack/slackLogo.jpg";
import ImageOne from "../../../assets/Slack/SlackLogin.png";
import ImageTwo from "../../../assets/Slack/SlackSignup.png";
import ImageThree from "../../../assets/Slack/SlackFirstChannelColor.png";
import ImageFour from "../../../assets/Slack/SlackSecondChannelColor.png";
import "./SlackClone.css";

class SlackClone extends Component {
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
          <div className="SlackAnimation SlackAnimationSpan">
            <b>
              <span>S</span>
              <span>l</span>
              <span>a</span>
              <span>c</span>
              <span>k</span>&nbsp;
              <span>C</span>
              <span>l</span>
              <span>o</span>
              <span>n</span>
              <span>e</span>
            </b>
            <Image data-aos="fade-up" className="SlackLogo" src={SlackLogo} />
          </div>
          <div id="about" data-aos="fade-right" className="SlackAbout">
            <h2 className="SlackAboutHeader">About:</h2>
            <p className="SlackAboutParagraph">
              My slack clone project can be found{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/MohamedHassan2498/slack-clone-react"
              >
                here
              </a>
            </p>
            <p className="SlackAboutParagraph">
              Slack is a collaboration hub that can replace email to help you
              and your team work together seamlessly. It’s designed to support
              the way people naturally work together, so you can collaborate
              with people online as efficiently as you do face-to-face, built
              using ReactJs and ReduxJs. The application uses all the new
              features introduced in ES6. The Application also used proper
              authentication and from validation and implements routing uses
              React Router.
            </p>
          </div>
          <p data-aos="fade-left" className="SlackPhotosParagraph">
            Here are some photos of the project
          </p>
          <Image
            data-aos="fade-left"
            className="SlackCustomizeImageSmall"
            src={ImageOne}
          />
          <Image
            data-aos="fade-left"
            className="SlackCustomizeImageSmall"
            src={ImageTwo}
          />
          <Image
            data-aos="fade-left"
            className="SlackCustomizeImageLarge"
            src={ImageThree}
          />
          <Image
            data-aos="fade-left"
            className="SlackCustomizeImageLarge"
            src={ImageFour}
          />
        </Container>
      </>
    );
  }
}

export default SlackClone;
