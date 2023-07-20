import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const iconsArray = [
  {
    iconName: "github",
    iconHref: "https://github.com/sbhand22",
    iconAriaLabel: "Github Link",
  },
  {
    iconName: "linkedin",
    iconHref: "https://www.linkedin.com/in/sai-bhandari/",
    iconAriaLabel: "LinkedIn Link",
  },
  {
    iconName: "mail",
    iconHref: "mailto:sbhand22@asu.edu",
    iconAriaLabel: "Email Link",
  },
  {
    iconName: "phone",
    iconHref: "tel:+1 6029199356",
    iconAriaLabel: "Phone Link",
  },
];

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
          I'm <span>Sai Bhandari</span>
        </h1>
        <div className="hireMeButton" data-aos="fade-up" data-aos-duration="1400">
          <a href="#contact">
            <button>
              Hire Me
            </button>
          </a>
        </div>
        <h2 data-aos="fade-up" data-aos-duration="1800">
          <span>
            <Typewriter
              options={{
                strings: ["Student", "Software Developer", "Problem solver"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          {iconsArray.map((iconArray) => (
            <a
              aria-label={iconArray.iconAriaLabel}
              target="_blank"
              rel="noopener noreferrer"
              href={iconArray.iconHref}
            >
              <Icon
                name={iconArray.iconName}
                size={
                  window.innerWidth <= 450
                    ? "tiny"
                    : window.innerWidth <= 860
                      ? "small"
                      : null
                }
              />
            </a>
          ))}
        </h2>
      </div>
    </header>
  );
};

export default Header;
