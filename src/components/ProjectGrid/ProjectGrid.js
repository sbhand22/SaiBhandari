import React from "react";
import { Grid } from "semantic-ui-react";
import ProjectCard from "../ProjectCard/ProjectCard";
import kiraLogo from '../../assets/Kira/Kira-img.png';
import flutterLogo from '../../assets/chatapp/flutterlogo.jpg';
import tableaulogo from '../../assets/heartwise/tableaulogo.jpg';


const projectDatas = [
  {
    projectName: "KIRA Skin cancer",
    briefDescription:
      "KIRA Skin cancer is a React web app for the betterment of the Skin Cancer society.",
    projectGithub: "https://github.com/sbhand22/Kira",
    projectUrl: "/kira-project",
    projectImage:
    kiraLogo,
    liveDemo: "https://kira-skin-cancer.netlify.app/",
  },
  {
    projectName: "Flutter-based Real-time Chat Application",
    briefDescription:
    "Harnessing Flutter, this app offers seamless, real-time chatting, secured by Firebase and provide scalable infrastructure.",
    projectGithub: "https://github.com/saibhandari1999/Flutter-chatapp.git",
    projectUrl: "/chatapp-project",
    projectImage:
    flutterLogo,
  },
  {
    projectName: "Heartwise Explorer",
    briefDescription:
      "Heartwise Explorer: an interactive Tableau Dashboard for healthcare insights.",
    projectUrl: "/heartwise-project",
    projectImage:
    tableaulogo,
    liveDemo: "https://public.tableau.com/app/profile/sai.bhandari/viz/HeartDiseaseDVproject/Dashboard1",
  },

];

const gridRows = projectDatas.reduce(function (rows, key, index) {
  return (
    (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
    rows
  );
}, []);

const ProjectGrid = () => {
  return (
    <Grid>
      {gridRows.map((gridRow, index) => (
        <Grid.Row key={index}>
          {gridRow.map((_, index) => (
            <Grid.Column key={index} mobile={16} tablet={8} computer={8}>
              <ProjectCard projectData={gridRow[index]} />
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
