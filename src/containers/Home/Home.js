import React, { Component } from "react";
import { Container, List, Image, Grid, Icon } from "semantic-ui-react";
import Media from "react-media";
import "./Home.css";
import myPicture from "../../assets/IMG-20200307-WA0053.png";
import { Link } from "react-scroll";
import burgerPicture from "../../assets/burgerProject.png";
import slackLogo from "../../assets/slackLogo.jpg";

class Home extends Component {
  render() {
    return (
      <Container>
        <Container className="navContainer">
          <a className="Logo">
            <span className="nameSpan">MH</span>
          </a>
          <List horizontal>
            <List.Item>
              <List.Content>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Link>
              </List.Content>
            </List.Item>
          </List>
        </Container>
        <Container>
          <div style={{ padding: "5em 1.5em", textAlign: "center" }}>
            <h1 className="nameInfo">
              Hello, my name is Mohamed. I am a Designer / Front End Developer.
            </h1>
            <Image className="myImage" src={myPicture} />
          </div>
          <div id="about" className="aboutContent">
            <h2 className="aboutHeader">About:</h2>
            <p className="aboutParagraph">
              I am currently a student at Faculty of Engineering, Alexandria
              University, Communication Department , I have previous experience
              in the front-end field as I was an intern at Bosta for 4 months, I
              built a website using ReactJS , Redux and Bootstrap UI about sold
              items left in stations monitored by Bosta that their buyers didn't
              receive yet due to unavailability, Here is my{" "}
              <a
                href="https://www.linkedin.com/in/mohamed-hassan-4b71b4188"
                target="_blank"
              >
                Linkedin
              </a>{" "}
              account
            </p>
          </div>
        </Container>
        <Container>
          <div id="projects" className="projectContent">
            <h2 className="projectHeader">Projects:</h2>
            <Media query={{ maxWidth: 599 }}>
              {matches =>
                matches ? (
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <h3 style={{ textAlign: "center", fontSize: "1.23em" }}>
                          Burger Builder
                        </h3>
                        {/* Add routing to this project page */}
                        <Image src={burgerPicture} />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <h3 style={{ textAlign: "center", fontSize: "1.23em" }}>
                          Slack Clone
                        </h3>
                        {/* Add routing to this project page */}
                        <Image src={slackLogo} />
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
                        {/* Add routing to this project page */}
                        <Image src={burgerPicture} />
                      </Grid.Column>
                      <Grid.Column>
                        <h3 style={{ textAlign: "center", fontSize: "1.23em" }}>
                          Slack Clone
                        </h3>
                        {/* Add routing to this project page */}
                        <Image src={slackLogo} />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                )
              }
            </Media>
          </div>
        </Container>
        <Container>
          <div id="contact" className="projectContent">
            <h2 className="projectHeader">Contact:</h2>
            {/*Add form for contact via mail */}
            <Grid style={{ marginLeft: "0rem" }}>
              <Grid.Row>
                <Icon size="big" disabled name="mail" />
                <p className="contactParagraph">
                  Email: mohamed.hassan2498@gmail.com
                </p>
              </Grid.Row>
              <Grid.Row>
                <Icon size="big" disabled name="phone" />
                <p className="contactParagraph"> Phone: +20 01281468213</p>
              </Grid.Row>
              <Grid.Row>
                <Icon size="big" disabled name="linkedin" />
                <p className="contactParagraph">
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/mohamed-hassan-4b71b4188"
                    target="_blank"
                  >
                    www.linkedin.com/in/mohamed-hassan-4b71b4188
                  </a>
                </p>
              </Grid.Row>
              <Grid.Row>
                <Icon size="big" disabled name="github" />
                <p className="contactParagraph">
                  Github:{" "}
                  <a
                    href="https://www.github.com/MohamedHassan2498"
                    target="_blank"
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
