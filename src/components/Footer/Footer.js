import React from "react";
import { Icon } from "semantic-ui-react";
import "./Footer.css";

const Nav = () => {
  return (
    <>
      <footer className="FooterStyle">
        <ul className="FooterUl">
          <li className="FooterListItem">
            <a
              href="https://www.github.com/MohamedHassan2498"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size="large" name="github" />
              Github
            </a>
          </li>
          <li className="FooterListItem">
            <Icon size="large" name="mail" /> mohamed.hassan2498@gmail.com
            <br />
            <Icon size="large" name="phone" /> +2 01281468213
          </li>
          <li className="FooterListItem">
            <a
              href="https://www.linkedin.com/in/mohamed-hassan-4b71b4188"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size="large" name="linkedin" />
              Linkedin
            </a>
          </li>
          <li className="FooterListItem">
            Copyright © 2020 Mohamed Hassan <br /> All rights reserved.
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Nav;
