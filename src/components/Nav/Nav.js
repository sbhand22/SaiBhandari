import React, { useEffect, useState } from "react";
import { stack as BurgerMenu } from "react-burger-menu";
import Media from "react-media";
import { Link } from "react-scroll";
import DarkMode from "../../components/DarkMode/DarkModeToggle";
import classes from "./Nav.css";

const Nav = (props) => {
  const [NavClass, setNavClass] = useState("Nav");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setNavClass(["Nav", "Navsticky"].join(" "));
      } else {
        setNavClass("Nav");
      }
    });
  }, []);

  return (
    <>
      <Media
        query="(min-width: 486px)"
        render={() => (
          <>
            {props.place === "home" ? (
              <ul className={NavClass}>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="root"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Home
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="about"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    About
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="skills"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Skills
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="projects"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Projects
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="contact"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Contact
                  </Link>
                </li>
                <li className="NavItem">
                  <DarkMode />
                </li>
              </ul>
            ) : (
              <ul className={NavClass}>
                <li className="NavItem">
                  <a className="NavLink" href="/" activeClass={classes.active}>
                    Home
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#about"
                    activeClass={classes.active}
                  >
                    About
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#skills"
                    activeClass={classes.active}
                  >
                    Skills
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#projects"
                    activeClass={classes.active}
                  >
                    Projects
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#contact"
                    activeClass={classes.active}
                  >
                    Contact
                  </a>
                </li>
                <li className="NavItem">
                  <DarkMode />
                </li>
              </ul>
            )}
          </>
        )}
      />
      <Media
        query="(max-width: 485px)"
        render={() => (
          <BurgerMenu>
            {props.place === "home" ? (
              <ul>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="root"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Home
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="about"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    About
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="skills"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Skills
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="projects"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Projects
                  </Link>
                </li>
                <li className="NavItem">
                  <Link
                    className="NavLink"
                    to="contact"
                    smooth={true}
                    duration={500}
                    activeClass={classes.active}
                  >
                    Contact
                  </Link>
                </li>
                <li className="NavItem">
                  <DarkMode />
                </li>
              </ul>
            ) : (
              <ul>
                <li className="NavItem">
                  <a className="NavLink" href="/" activeClass={classes.active}>
                    Home
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#about"
                    activeClass={classes.active}
                  >
                    About
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#skills"
                    activeClass={classes.active}
                  >
                    Skills
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#projects"
                    activeClass={classes.active}
                  >
                    Projects
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#contact"
                    activeClass={classes.active}
                  >
                    Contact
                  </a>
                </li>
                <li className="NavItem">
                  <DarkMode />
                </li>
              </ul>
            )}
          </BurgerMenu>
        )}
      />
    </>
  );
};

export default Nav;
