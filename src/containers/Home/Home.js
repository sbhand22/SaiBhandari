import React, { Component } from "react";
import { Container, List, Image, Grid, Icon } from "semantic-ui-react";
import Media from "react-media";
import "./Home.css";
import myPicture from "../../assets/IMG-20200307-WA0053.png";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import burgerPicture from "../../assets/Burger/burgerProject.png";
import slackLogo from "../../assets/Slack/slackLogo.jpg";
import ContactForm from "./ContactForm/ContactForm";

class Home extends Component {
  componentDidMount() {
    if (window.location.href === "http://localhost:3000/home/#projects") {
      window.scrollTo(0, 1150);
    }
    if (window.location.href === "http://localhost:3000/home/#contact") {
      window.scrollTo(0, 2150);
    }
  }
  render() {
    return (
      <Container>
        <Container className="HomeNavContainer">
          <a href="/home" className="HomeLogo">
            <span className="HomeNameSpan">MH</span>
          </a>
          <List horizontal>
            <List.Item>
              <List.Content>
                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                    About
                  </span>
                </ScrollLink>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <ScrollLink
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                    Projects
                  </span>
                </ScrollLink>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                    Contact
                  </span>
                </ScrollLink>
              </List.Content>
            </List.Item>
          </List>
        </Container>
        <Container>
          <div style={{ padding: "5em 1.5em", textAlign: "center" }}>
            <h1 className="HomeNameInfo">
              Hello, my name is Mohamed. I am a Designer / Front End Developer.
            </h1>
            <Image className="HomeMyImage" src={myPicture} />
          </div>
          <div id="about" className="HomeAboutContent">
            <h2 className="HomeAboutHeader">About:</h2>
            <p className="HomeAboutParagraph">
              I am currently a student at Faculty of Engineering, Alexandria
              University, Communication Department , I have previous experience
              in the front-end field as I was an intern at Bosta for 4 months, I
              built a website using ReactJS , Redux and Bootstrap UI about sold
              items left in stations monitored by Bosta that their buyers didn't
              receive yet due to unavailability, Here is my{" "}
              <a
                href="https://www.linkedin.com/in/mohamed-hassan-4b71b4188"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>{" "}
              account
            </p>
          </div>
        </Container>
        <Container>
          <div id={`projects`} className="HomeProjectContent">
            <h2 className="HomeProjectHeader">Projects:</h2>
            <Media query={{ maxWidth: 599 }}>
              {matches =>
                matches ? (
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <h3 style={{ textAlign: "center", fontSize: "1.23em" }}>
                          Burger Builder
                        </h3>
                        <Link to="/burger-project">
                          <Image src={burgerPicture} />
                        </Link>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <h3 style={{ textAlign: "center", fontSize: "1.23em" }}>
                          Slack Clone
                        </h3>
                        <Link to="/slack-project">
                          <Image src={slackLogo} />
                        </Link>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                ) : (
                  <Grid>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <h3 style={{ textAlign: "center", fontSize: "1.23em" }}>
                          Burger Builder
                        </h3>
                        <Link to="/burger-project">
                          <Image src={burgerPicture} />
                        </Link>
                      </Grid.Column>
                      <Grid.Column>
                        <h3 style={{ textAlign: "center", fontSize: "1.23em" }}>
                          Slack Clone
                        </h3>
                        <Link to="/slack-project">
                          <Image src={slackLogo} />
                        </Link>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                )
              }
            </Media>
          </div>
        </Container>
        <Container>
          <div id="contact" className="HomeContactContent">
            <h2 className="HomeContactHeader">Contact:</h2>
            <ContactForm />
            <Grid style={{ marginLeft: "0rem" }}>
              <Grid.Row>
                <Icon size="big" disabled name="mail" />
                <p className="HomeContactParagraph">
                  Email: mohamed.hassan2498@gmail.com
                </p>
              </Grid.Row>
              <Grid.Row>
                <Icon size="big" disabled name="phone" />
                <p className="HomeContactParagraph"> Phone: +20 01281468213</p>
              </Grid.Row>
              <Grid.Row>
                <Icon size="big" disabled name="linkedin" />
                <p className="HomeContactParagraph">
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/mohamed-hassan-4b71b4188"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.linkedin.com/in/mohamed-hassan-4b71b4188
                  </a>
                </p>
              </Grid.Row>
              <Grid.Row>
                <Icon size="big" disabled name="github" />
                <p className="HomeContactParagraph">
                  Github:{" "}
                  <a
                    href="https://www.github.com/MohamedHassan2498"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.github.com/MohamedHassan2498
                  </a>
                </p>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </Container>
    );
  }
}
export default Home;
