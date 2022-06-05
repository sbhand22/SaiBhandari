import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <header id="home" className="homeHeader">
      <div className="heroHeaderContainer">
        <h1 data-aos="fade-up" className="headerHero">
          Hello,
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="1400" className="headerHero">
          I'm <span>Mohamed Hassan</span>
        </h1>
        <h2 data-aos="fade-up" data-aos-duration="1800">
          <span>
            <Typewriter
              options={{
                strings: ["Student", "Front-End Engineer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <a
            aria-label="Github Link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MohamedHassan98"
          >
            <Icon name="github" />
          </a>
          <a
            aria-label="LinkedIn Link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohamed-hassan98/"
          >
            <Icon name="linkedin" />
          </a>
          <a aria-label="Email Link" href="mailto:mohamed.hassan2498@gmail.com">
            <Icon name="mail" />
          </a>
          <a aria-label="Phone Link" href="tel:+2 01281468213">
            <Icon name="phone" />
          </a>
        </h2>
      </div>
    </header>
  );
};

export default Header;
