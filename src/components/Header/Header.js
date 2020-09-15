import React, { useEffect } from "react";
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
    <header id="home" className="header">
      {" "}
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
        </h2>
      </div>
    </header>
  );
};

export default Header;
