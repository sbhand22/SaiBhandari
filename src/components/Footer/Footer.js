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
              href="https://github.com/sbhand22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size="large" name="github" />
              Sbhand22
            </a>
          </li>
          <li className="FooterListItem">
            <a href="mailto:sbhand22@asu.edu">
              <Icon size="large" name="mail" /> sbhand22@asu.edu
            </a>
            <br />
            <a href="tel:+2 01281468213">
              <Icon size="large" name="phone" /> +1 6029199356
            </a>
          </li>
          <li className="FooterListItem">
            <a
              href="https://www.linkedin.com/in/sai-bhandari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size="large" name="linkedin" />
              sai-bhandari
            </a>
          </li>
          <li className="FooterListItem">
            Copyright © {new Date().getFullYear()} Sai Bhandari <br /> All
            rights reserved.
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Nav;
