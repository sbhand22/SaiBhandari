import React from "react";
import { Container, Icon, Label, Grid } from "semantic-ui-react";
import { ToastContainer, Flip } from "react-toastify";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import ContactForm from "../ContactForm/ContactForm";
import "./Home.css";

const Home = () => {
  return (
    <>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Nav place={"home"} />
      <Header />
      <Container>
        <div
          data-aos="fade-right"
          id="about"
          className="HomeContent HomePadding"
        >
          <h2 className="HomeHeaders">
            <Icon name="user" size="large" /> About:
          </h2>
          <p className="HomeParagraph">
            A technology nerd, who loves to seek more knowledge about anything
            related to the front-end field, currently a fresh graduate,
            previously a student at the Faculty of Engineering, Electronics
            &amp; Communication Department.
          </p>
          <Grid>
            <Grid.Row>
              <Grid.Column
                textAlign="center"
                mobile={16}
                tablet={8}
                computer={8}
              >
                <h2>Education:</h2>
                <div className=" AboutSubSectionContent">
                  <h3>
                    <Icon name="book" /> Alexandria University
                  </h3>
                  <h4>
                    Electronics &amp; Communication Department
                    <Label
                      className="AboutSubSectionUniLabel"
                      as="p"
                      color="blue"
                      circular="true"
                    >
                      Sep 2017 - July 2022
                    </Label>
                  </h4>
                </div>
                <div className=" AboutSubSectionContent">
                  <h3>
                    <Icon name="book" />
                    High School
                  </h3>
                  <h4>
                    Victory College, IGCSE Department
                    <Label
                      className="AboutSubSectionSchoolLabel"
                      as="p"
                      color="blue"
                      circular="true"
                    >
                      Class of 2017
                    </Label>
                  </h4>
                </div>
              </Grid.Column>
              <Grid.Column
                textAlign="center"
                mobile={16}
                tablet={8}
                computer={8}
              >
                <h2>Experience:</h2>
                <div className=" AboutSubSectionContent">
                  <h3>
                    <Icon name="briefcase" /> Front-End Engineer Intern
                  </h3>
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://bosta.co"
                    >
                      Bosta
                    </a>
                    <Label
                      className="AboutSubSectionExpLabel"
                      as="p"
                      color="blue"
                      circular="true"
                    >
                      July 2019 - October 2019
                    </Label>
                  </h4>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div
          data-aos="fade-right"
          id="skills"
          className="HomeContent HomePadding"
        >
          <h2 className="HomeHeaders">
            <Icon name="code" size="large" /> Skills:
          </h2>
          <Skills />
        </div>
        <div
          data-aos="fade-left"
          id={`projects`}
          className="HomeContent HomePadding"
        >
          <h2 className="HomeHeaders">
            <Icon name="laptop" size="large" /> Projects:
          </h2>
          <ProjectGrid />
        </div>
        <div
          data-aos="fade-down"
          id="contact"
          className="HomeContent HomePadding"
        >
          <h2 className="HomeHeaders">
            <Icon name="mail" size="large" /> Contact:
          </h2>
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default Home;
