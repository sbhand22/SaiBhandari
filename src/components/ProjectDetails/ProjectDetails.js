import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Image } from "semantic-ui-react";
import axios from "axios";
import AOS from "aos";
import Nav from "../Nav/Nav";
import "./ProjectDetails.css";
import kiraLogo from '../../assets/Kira/Kira-img.png';
import kiraHomePageSS from '../../assets/Kira/homepage-ss.png';
import kirafindSS from '../../assets/Kira/find-derma-ss.png';
import kiraiseaseInfodSS from '../../assets/Kira/disease-info-ss.png';
import kiraCancerinfoSS from '../../assets/Kira/cancer-info-ss.png';
import kiraBlogPageSS from '../../assets/Kira/kira-blog-ss.png';
import kiraGetTestedSS from '../../assets/Kira/get-tested-ss.png';
import chatappss1 from '../../assets/chatapp/ss1.jpg'
import chatappss11 from '../../assets/chatapp/ss (1).jpg'
import chatappss12 from '../../assets/chatapp/ss (2).jpg'
import chatappss13 from '../../assets/chatapp/ss (3).jpg'
import chatappss14 from '../../assets/chatapp/ss (4).jpg'
import tableaulogo from '../../assets/heartwise/tableaulogo.jpg';
import heartwisess11 from '../../assets/heartwise/ss31 (1).jpg'
import heartwisess12 from '../../assets/heartwise/ss31 (2).jpg'
import heartwisess13 from '../../assets/heartwise/ss31 (3).jpg'
import heartwisess14 from '../../assets/heartwise/ss31 (4).jpg'

const projectData = {
  "kira-project": {
    projectName: "KIRA Skin cancer",
    projectLogo: kiraLogo,
    projectGithub: "https://github.com/sbhand22/Kira",
    projectDescription: "In an endeavor to facilitate early detection and classification of skin cancer, the KIRA Skin Cancer Detection website was brought to life, boasting a robust Angular and NodeJS foundation. The platform seamlessly integrates a Sequential Convolutional Neural Network (CNN) into its user interface, leveraging machine learning to offer predictions with an accuracy rate of 83%. The entire infrastructure leverages AWS services including S3, CloudFront, and Lambda, coupled with AWS Amplify and Cognito, ensuring not only a scalable and efficient hosting but also secure user authentication and streamlined access management. This initiative embodies a step forward in employing technology to foster health and wellbeing, ushering users into a future with safer, and more informed skin health management.",
    projectLiveDemo: "https://kira-skin-cancer.netlify.app/",
    projectPhotos: [
      { imageClassName: "imageClass1", imageUrl: kiraHomePageSS },
      { imageClassName: "imageClass1", imageUrl: kirafindSS },
      { imageClassName: "imageClass1", imageUrl: kiraGetTestedSS },
      { imageClassName: "imageClass1", imageUrl: kiraCancerinfoSS },
      { imageClassName: "imageClass1", imageUrl: kiraiseaseInfodSS },
      { imageClassName: "imageClass1", imageUrl: kiraBlogPageSS }, // update with your asset path
    ],
  },
  "chatapp-project": {
    projectName: "Flutter-based Real-time Chat Application",
    projectLogo: "https://cdn.dribbble.com/users/4009983/screenshots/16047199/media/5ebee3eea85f65f654414699c4a75f00.jpg?resize=1000x750&vertical=center", 
    projectGithub: "https://github.com/saibhandari1999/Flutter-chatapp.git",
    projectDescription:
        "In the dynamic realm of mobile development, I recently spearheaded the creation of a cutting-edge Chat Application utilizing the robust Flutter framework, ensuring a seamless, cross-platform user experience. This application epitomizes a harmonious blend of front-end innovation and back-end fortification, showcasing real-time messaging capabilities.",
    // projectLiveDemo: "https://livedemo.com/project-two",
    projectPhotos: [
      { imageClassName: "imageClass1", imageUrl: chatappss1 },
      { imageClassName: "imageClass1", imageUrl: chatappss11 },
      { imageClassName: "imageClass1", imageUrl: chatappss12 },
      { imageClassName: "imageClass1", imageUrl: chatappss13 },
      { imageClassName: "imageClass1", imageUrl: chatappss14 },
    ],
  },
  "heartwise-project": {
    projectName: "Heartwise Explorer",
    projectLogo: tableaulogo, 
    // projectGithub: "https://github.com/saibhandari1999/Flutter-chatapp.git",
    projectDescription:
        "Heartwise Explorer is a specialized Tableau Dashboard focused on elevating the understanding and analysis of heart disease through the meticulous examination of 14 key attributes extracted from multi-institutional patient records. The project’s essence lies in its ability to remodel data cleaning and transformation processes, ensuring the generation of accurate and insightful visualizations that aid in unraveling the complexities of heart health. The dashboard distinguishes itself through the incorporation of interactive controls, designed to enhance user engagement and offer a tailored exploration experience. These features facilitate efficient data interpretation, empowering users to delve deeper into the intricacies of the available information and extract meaningful insights. By bridging the gap between data and knowledge, Heartwise Explorer stands as a testament to the potential of technology in healthcare, aiming to contribute to advancements in heart disease research, diagnosis, and treatment.",
    projectLiveDemo: "https://public.tableau.com/app/profile/sai.bhandari/viz/HeartDiseaseDVproject/Dashboard1",
    projectPhotos: [
      { imageClassName: "imageClass1", imageUrl: heartwisess11 },
      { imageClassName: "imageClass1", imageUrl: heartwisess12 },
      { imageClassName: "imageClass1", imageUrl: heartwisess13 },
      { imageClassName: "imageClass1", imageUrl: heartwisess14 },
    ],
  },
};

const ProjectDetails = () => {
  let projectTitle = useRef(() => {});
  let [projectDetails, setProjectDetails] = useState(null);
  let [loading, setLoading] = useState(true);
  const locationUrl = useLocation();
  projectTitle = locationUrl.pathname.slice(1);


  useEffect(() => {
    console.log(projectTitle);
    setProjectDetails(projectData[projectTitle]);
    setLoading(false);
    AOS.init({
      duration: 1000,
    });
  }, []);

  if (loading) {  // Add this block
    return <p>Loading...</p>;
  }

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
          {projectDetails.projectGithub && (
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
)}
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
 
        {projectDetails.projectPhotos && projectDetails.projectPhotos.length > 0 ? (
  <>
    <p data-aos="fade-left" className="ProjectPhotosParagraph">
      Here are some photos of the project
    </p>
    {projectDetails.projectPhotos.map((projectPhoto, index) => (
      <Image
        key={index}
        data-aos="fade-left"
        alt="Project Image"
        className={projectPhoto.imageClassName}
        src={projectPhoto.imageUrl}
      />
    ))}
  </>
) : null}
      </Container>
    </>
  );
};

export default ProjectDetails;
