import React from "react";
import { Grid } from "semantic-ui-react";
import ProjectCard from "../ProjectCard/ProjectCard";

const projectDatas = [
  {
    projectName: "Burger Builder",
    briefDescription:
      "Burger Builder is a website about builidng a burger with your own ingredient.",
    projectGithub: "https://github.com/MohamedHassan98/React-Burger-Project",
    projectUrl: "/burger-project",
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ee47d.appspot.com/o/burgerProject%2FburgerProject.webp?alt=media",
  },
  {
    projectName: "Slack Clone",
    briefDescription:
      "Slack Clone is a simple chat app that is close to Slack, a messaging app for business that connects people to the information they need.",
    projectGithub: "https://github.com/MohamedHassan98/slack-clone-react",
    projectUrl: "/slack-project",
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ee47d.appspot.com/o/slackProject%2FslackLogo.webp?alt=media",
  },
  {
    projectName: "WikiMovies",
    briefDescription:
      "WikiMovies is a website about movies, tv shows and their cast using TMDb API.",
    projectGithub: "https://github.com/MohamedHassan98/WikiMovies",
    projectUrl: "/wikimovies-project",
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ee47d.appspot.com/o/wikimoviesProject%2FMoviesLogo.webp?alt=media",
    liveDemo: "https://wikimovies2498.netlify.app/",
  },
  {
    projectName: "Snuggs Commerce",
    briefDescription:
      "Snuggs Clone is a website about an e-commerce business shop.",
    projectGithub: "https://github.com/MohamedHassan98/E-Commerce",
    projectUrl: "/snuggs-commerce-project",
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ee47d.appspot.com/o/snuggscommerceProject%2FSnuggsLogo.webp?alt=media",
    liveDemo: "https://snuggs-commerce.netlify.app/",
  },
  {
    projectName: "Natours",
    briefDescription:
      "Natours is a landing page advertising for a travel agency.",
    projectGithub: "https://github.com/MohamedHassan98/Natours",
    projectUrl: "/natours-project",
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ee47d.appspot.com/o/natoursProject%2FNatoursLogo.webp?alt=media",
    liveDemo: "https://natourlandingpage.netlify.app/",
  },
  {
    projectName: "Nexter",
    briefDescription: "Nexter is a landing page advertising for real estate",
    projectGithub: "https://github.com/MohamedHassan98/Nexter",
    projectUrl: "/nexter-project",
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ee47d.appspot.com/o/nexterProject%2FNexterLogo.webp?alt=media",
    liveDemo: "https://nexterlandingpage.netlify.app/",
  },
  {
    projectName: "Trillo",
    briefDescription:
      "Trillo is a landing page advertising for a booking website",
    projectGithub: "https://github.com/MohamedHassan98/Trillo",
    projectUrl: "/trillo-project",
    projectImage:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ee47d.appspot.com/o/trilloProject%2FTrilloLogo.webp?alt=media",
    liveDemo: "https://trillolandingpage.netlify.app/",
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
