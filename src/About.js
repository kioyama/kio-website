import React, { Component } from "react";
import { aboutImage } from "./data";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 className="display-title ">About</h2>
        <div className="about-images">
          <img src={aboutImage} alt="Kio Murayama"></img>
          <img src={aboutImage} alt="Kio Murayama"></img>
          <img src={aboutImage} alt="Kio Murayama"></img>
        </div>
        <div className="about-details">
          <div className="about-details-label-box ">
            <p>Biography</p>
          </div>
          <div className="about-details-info-box">
            <p>
              Born in Los Angeles, Kio Murayama explores multiple mediums. He
              loves both art and engineering.
            </p>
          </div>
        </div>
        <div className="about-details">
          <div className="about-details-label-box ">
            <p>Education</p>
          </div>
          <div className="about-details-info-box">
            <p>
              Boston University <br></br>
              B.S. Mechanical Engineering <br></br>
              Minor Visual Art <br></br>
              Contact <br></br>
            </p>
          </div>
        </div>
        <div className="about-details">
          <div className="about-details-label-box ">
            <p>Contact</p>
          </div>
          <div className="about-details-info-box">
            <p>
              Email:{" "}
              <span>
                <a href="mailto: kioyama@bu.edu">kioyama@bu.edu</a>
              </span>{" "}
              <br></br>
              Instagram: @kiomurayama<br></br>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
