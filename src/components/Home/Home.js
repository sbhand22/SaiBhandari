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
            <Icon name="user" size="large" />
             About:
          </h2>
          <p className="HomeParagraph" style={{textAlign: 'justify'}}>
            I'm an Information Technology Master's student at Arizona State University, 
            a seasoned software developer, and an entrepreneurial spirit with roots in Infosys 
            Ltd and Decyfertech IT Solutions. My tech repertoire spans across a multitude of 
            tools, languages, and frameworks including Java, Git, React, Angular, Python, Flutter and more. 
            Currently shaping the future at ASU as a software developer, I'm putting my 
            expertise to work by crafting impactful mobile applications. My innovative mindset is 
            reflected in my AWS and Azure certifications, a patent, and an IEEE research publication. 
            In a constantly changing technological landscape, I am driven by the pursuit of robust, 
            innovative solutions. Let's connect and drive change together!
        </p>
          <Grid>
            <Grid.Row>
              <Grid.Column
                textAlign="center"
                mobile={16}
                tablet={8}
                computer={8}
              >
                <h2>Education</h2>
                <div className=" AboutSubSectionContent">
                  <h3>
                    <Icon name="book" /> Arizona State University
                  </h3>
                  <h4>
                    M.S. Information Technology
                    <Label
                      className="AboutSubSectionUniLabel"
                      as="p"
                      color="blue"
                      circular="true"
                    >
                      Aug 2022 - May 2024
                    </Label>
                  </h4>
                </div>
                <div className=" AboutSubSectionContent">
                  <h3>
                    <Icon name="book" />
                    Savitribai Phule Pune University
                  </h3>
                  <h4>
                  Bachelor of Engineering
                    <Label
                      className="AboutSubSectionSchoolLabel"
                      as="p"
                      color="blue"
                      circular="true"
                    >
                      Jun 2016 - May 2020
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
                <h2>Experience</h2>
                <div className=" AboutSubSectionContent">
                  <h3>
                    <Icon name="briefcase" /> Software Developer
                  </h3>
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dt.asu.edu/"
                    >
                      ASU-The Decision Theater Network
                    </a>
                    <Label
                      className="AboutSubSectionExpLabel"
                      as="p"
                      color="blue"
                      circular="true"
                    >
                      Mar 2023 - Present
                    </Label>
                  </h4>
                </div>
                <div className=" AboutSubSectionContent">
                  <h3>
                    <Icon name="briefcase" /> Specialist Programmer
                  </h3>
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.infosys.com/"
                    >
                      Infosys
                    </a>
                    <Label
                      className="AboutSubSectionExpLabel"
                      as="p"
                      color="blue"
                      circular="true"
                    >
                      Nov 2020 - Aug 2022
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
