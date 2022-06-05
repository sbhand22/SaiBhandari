import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Image } from "semantic-ui-react";
import axios from "axios";
import AOS from "aos";
import Nav from "../Nav/Nav";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  let [projectDetails, setProjectDetails] = useState([]);
  const locationUrl = useLocation();
  const projectTitle = locationUrl.pathname.slice(1);
  useEffect(() => {
    axios
      .get(
        `https://portfolio-ee47d-default-rtdb.firebaseio.com/%22projects%22/%22${projectTitle}%22.json`
      )
      .then((response) => setProjectDetails(response.data))
      .catch((err) => console.log(err));
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Nav />
      <Container>
        <div className="ProjectDetailsAnimation ProjectDetailsAnimationSpan">
          <b>
            {projectDetails.projectName
              ? projectDetails.projectName
                  .replace("-", " ")
                  .split("")
                  .map((projectChar, index) => (
                    <span key={index}>{projectChar}</span>
                  ))
              : null}
          </b>
          <Image
            alt="Project Logo"
            data-aos="fade-up"
            className="ProjectLogo"
            src={projectDetails.projectLogo}
          />
        </div>
        <div id="about" data-aos="fade-right" className="ProjectAbout">
          <h2 className="ProjectAboutHeader">About:</h2>
          <p className="ProjectAboutParagraph">
            My {projectTitle.replace(/-/g, " ")} can be found{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={projectDetails.projectGithub}
            >
              here!
            </a>
          </p>
          <p className="ProjectAboutParagraph">
            {projectDetails.projectDescription}
          </p>
          {projectDetails.projectLiveDemo ? (
            <p className="ProjectAboutParagraph">
              Live demo{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={projectDetails.projectLiveDemo}
              >
                here!
              </a>
            </p>
          ) : null}
        </div>
        <p data-aos="fade-left" className="ProjectPhotosParagraph">
          Here are some photos of the project
        </p>
        {projectDetails.projectFaultyImages ? (
          <p data-aos="fade-left" className="ProjectPhotosParagraph">
            {projectDetails.projectFaultyImages}
          </p>
        ) : null}
        {projectDetails.projectPhotos ? (
          projectDetails.projectPhotos.map((projectPhoto, index) => (
            <Image
              key={index}
              data-aos="fade-left"
              alt="Project Image"
              className={projectPhoto.imageClassName}
              src={projectPhoto.imageUrl}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </>
  );
};

export default ProjectDetails;
