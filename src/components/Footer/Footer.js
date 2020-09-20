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
              href="https://github.com/MohamedHassan98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size="large" name="github" />
              MohamedHassan98
            </a>
          </li>
          <li className="FooterListItem">
            <a href="mailto:mohamed.hassan2498@gmail.com">
              <Icon size="large" name="mail" /> mohamed.hassan2498@gmail.com
            </a>
            <br />
            <a href="tel:+2 01281468213">
              <Icon size="large" name="phone" /> +2 01281468213
            </a>
          </li>
          <li className="FooterListItem">
            <a
              href="https://www.linkedin.com/in/mohamed-hassan98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size="large" name="linkedin" />
              mohamed-hassan98
            </a>
          </li>
          <li className="FooterListItem">
            Copyright © {new Date().getFullYear()} Mohamed Hassan <br /> All
            rights reserved.
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Nav;
