import React, { Component } from "react";
import { List, Container, Image } from "semantic-ui-react";
import "./SlackClone.css";
import { Link } from "react-router-dom";
import SlackLogo from "../../../assets/Slack/slackLogo.jpg";
import ImageOne from "../../../assets/Slack/SlackLogin.png";
import ImageTwo from "../../../assets/Slack/SlackSignup.png";
import ImageThree from "../../../assets/Slack/SlackFirstChannelColor.png";
import ImageFour from "../../../assets/Slack/SlackSecondChannelColor.png";

class SlackClone extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container>
        <Container className="SlackNavContainer">
          <a href="/home" className="SlackHomeLogo">
            <span className="SlackNameSpan">MH</span>
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
            <h1 className="SlackNameInfo">Slack Clone</h1>
            <Image style={{ margin: "auto" }} src={SlackLogo} />
          </div>
          <div id="about" className="SlackAboutContent">
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

            <p className="SlackAboutParagraph">
              Here are some photos of the project
            </p>
          </div>
          <Image className="SlackCustomizeImageSmall" src={ImageOne} />
          <Image className="SlackCustomizeImageSmall" src={ImageTwo} />
          <Image className="SlackCustomizeImageLarge" src={ImageThree} />
          <Image className="SlackCustomizeImageLarge" src={ImageFour} />
        </Container>
      </Container>
    );
  }
}

export default SlackClone;
