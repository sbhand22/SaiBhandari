import React, { useEffect, useState } from "react";
import { stack as BurgerMenu } from "react-burger-menu";
import Media from "react-media";
import { Link } from "react-scroll";
import DarkMode from "../../components/DarkMode/DarkModeToggle";
import classes from "./Nav.css";

const Nav = (props) => {
  const [NavClass, setNavClass] = useState("Nav");
  const isProjectPage = window.location.pathname.endsWith("-project");

  useEffect(() => {
    if (isProjectPage) return; // Skip adding event listener if on project page

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavClass(["Nav", "Navsticky"].join(" "));
      } else {
        setNavClass("Nav");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isProjectPage]);

  if (isProjectPage) {
    return (
      <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}>
        <button
          onClick={() => window.history.back()}
          style={{
            backgroundColor: '#5a55cc',
            color: 'white',
            padding: '12px', // Adjusted padding
            width: '50px', // Adjusted width and height
            height: '50px',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px', // Increased font size
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            textAlign: 'center',
            lineHeight: '26px', // Adjusted line height
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1B193D'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#5a55cc'}
        >
          ←
        </button>
      </div>
    );
  }

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
                    href="/"
                    activeclass={classes.active}
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
                    href="/"
                    activeclass={classes.active}
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
                    href="/"
                    activeclass={classes.active}
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
                    href="/"
                    activeclass={classes.active}
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
                    href="/"
                    activeclass={classes.active}
                  >
                    Connect
                  </Link>
                </li>
                <li className="NavItem">
                  <DarkMode />
                </li>
              </ul>
            ) : (
              <ul className={NavClass}>
                <li className="NavItem">
                  <a className="NavLink" href="/" activeclass={classes.active}>
                    Home
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#about"
                    activeclass={classes.active}
                  >
                    About
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#skills"
                    activeclass={classes.active}
                  >
                    Skills
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#projects"
                    activeclass={classes.active}
                  >
                    Projects
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#contact"
                    activeclass={classes.active}
                  >
                    Connect
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
                    activeclass={classes.active}
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
                    activeclass={classes.active}
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
                    activeclass={classes.active}
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
                    activeclass={classes.active}
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
                    activeclass={classes.active}
                  >
                    Connect
                  </Link>
                </li>
                <li className="NavItem">
                  <DarkMode />
                </li>
              </ul>
            ) : (
              <ul>
                <li className="NavItem">
                  <a className="NavLink" href="/" activeclass={classes.active}>
                    Home
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#about"
                    activeclass={classes.active}
                  >
                    About
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#skills"
                    activeclass={classes.active}
                  >
                    Skills
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#projects"
                    activeclass={classes.active}
                  >
                    Projects
                  </a>
                </li>
                <li className="NavItem">
                  <a
                    className="NavLink"
                    href="/#contact"
                    activeclass={classes.active}
                  >
                    Connect
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
