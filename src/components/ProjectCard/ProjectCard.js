import React from "react";
import { Image, Icon, Card } from "semantic-ui-react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="ProjectRow">
      <Card className="ProjectCard">
        <Image
          bordered
          className="ProjectImage"
          alt="Project Image"
          src={props.projectData.projectImage}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>
            <h3 className="ProjectTitle">
              <a rel="noopener noreferrer" href={props.projectData.projectUrl}>
                {props.projectData.projectName}
              </a>
            </h3>
          </Card.Header>
          <Card.Description className="ProjectCardDescription">
            {props.projectData.briefDescription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="ProjectCardContent">
          <a
            rel="noopener noreferrer"
            href={props.projectData.projectUrl}
            style={{ width: "fit-content" }}
          >
            <button className="ProjectButtons">
              <Icon name="hand point right" size="large" />
              Show Details
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.projectData.projectGithub}
            style={{ width: "fit-content" }}
          >
            <button className="ProjectButtons">
              Github <Icon name="github" size="large" />
            </button>
          </a>
          {props.projectData.liveDemo ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.projectData.liveDemo}
              style={{ width: "fit-content" }}
            >
              <button className="ProjectButtons">
                Demo <Icon name="angle double right" size="large" />
              </button>
            </a>
          ) : null}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProjectCard;
