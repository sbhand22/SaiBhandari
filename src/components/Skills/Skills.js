import React from "react";
import { Icon } from "semantic-ui-react";
import ReactTooltip from "react-tooltip";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="SkillsDiv">
      <ReactTooltip effect="solid" />
      <Icon data-tip="HTML" className="SkillEditor" name="html5" size="big" />
      <Icon data-tip="CSS" className="SkillEditor" name="css3" size="big" />
      <Icon data-tip="SASS" className="SkillEditor" name="sass" size="big" />
      <Icon
        data-tip="JavaScript"
        className="SkillEditor"
        name="js square"
        size="big"
      />
      <Icon
        data-tip="ReactJS"
        className="SkillEditor"
        name="react"
        size="big"
      />
      <Icon data-tip="Git" className="SkillEditor" name="git" size="big" />
    </div>
  );
};

export default Skills;
