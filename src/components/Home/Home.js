import React from "react";
import { Container, Icon } from "semantic-ui-react";
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
            I'm currently a student at Faculty of Engineering, Alexandria
            University, Electronics &amp; Communication Department, I have
            previous experience in the front-end field as I was an intern at{" "}
            <a
              href="https://bosta.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bosta
            </a>{" "}
            for 4 months, I built a website using ReactJS , Redux and Bootstrap
            UI about sold items left in stations monitored by Bosta that their
            buyers didn't receive yet due to unavailability, Here is my{" "}
            <a
              href="https://www.linkedin.com/in/mohamed-hassan98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>{" "}
            account.
          </p>
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
