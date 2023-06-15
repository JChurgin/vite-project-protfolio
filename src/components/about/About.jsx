import React from "react";
import "./about.css";
import ME from "../../assets/pfp-github.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Connections</h5>
              <small>270+ and growing</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Compleated</small>
            </article>
          </div>

          <p>
            Passionate about pushing boundaries and embracing innovation, I am a
            highly motivated Full Stack Developer ready to make a lasting
            impact. With a diverse background in the tourism and agricultural
            sectors, I have developed strong communication skills and
            adaptability, allowing me to collaborate effectively with
            multidisciplinary teams. My commitment to continuous learning and
            personal growth drives me to constantly enhance my coding skills,
            making me an asset to any organization that values creativity and
            forward-thinking. I bring a positive attitude, a willingness to
            think outside the box, and an unwavering dedication to excellence.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
