import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I’m a passionate and self-motivated Frontend Developer with
              a strong foundation in HTML, CSS, JavaScript, and React.js. I
              enjoy crafting clean, responsive user interfaces and turning ideas
              into interactive web experiences.
            </p>
            <p>
              Although I’m a fresher, I’ve built multiple projects like to-do
              list apps, weather apps, and responsive websites to strengthen my
              skills. I’m quick to learn, love problem-solving, and always eager
              to explore new frontend technologies and UI/UX practices.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
