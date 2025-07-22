import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
// import arrow_icon from "../../assets/arrow_icon.svg";

const Skills = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <img src={services.s_no} alt="" />
              <h3>{services.s_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
