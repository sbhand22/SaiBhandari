import React from "react";
import { Icon } from "semantic-ui-react";
import ReactTooltip from "react-tooltip";
import "./Skills.css";

const skillsArray = [
  {
    dataTip: "HTML",
    name: "html5",
  },
  {
    dataTip: "CSS",
    name: "css3",
  },
  {
    dataTip: "SASS",
    name: "sass",
  },
  {
    dataTip: "JavaScript",
    name: "js square",
  },
  {
    dataTip: "ReactJS",
    name: "react",
  },
  {
    dataTip: "Git",
    name: "git",
  },
];

const Skills = () => {
  return (
    <div className="SkillsDiv">
      <ReactTooltip effect="solid" />
      {skillsArray.map((skillArray) => (
        <Icon
          data-tip={skillArray.dataTip}
          className="SkillEditor"
          name={skillArray.name}
          size="big"
        />
      ))}
    </div>
  );
};

export default Skills;
