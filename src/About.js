import React, {Component} from "react";
import {aboutImage} from "./data";

class About extends Component {
  render() {
    return (
      <div className="about-wrap">
        <div className="about">
          <h2 className="display-title ">about</h2>
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
                Born in Los Angeles, Kio Murayama is a multifaceted creator working in a
                space where engineering intersects with art practice.
              </p>
            </div>
          </div>
          <div className="about-details">
            <div className="about-details-label-box ">
              <p>Education</p>
            </div>
            <div className="about-details-info-box">
              <p>
                Boston University
                <br></br>
                B.S. Mechanical Engineering
                <br></br>
                Minor Visual Arts
                <br></br>
                2022
                <br></br>
              </p>
            </div>
          </div>
          <div className="about-details">
            <div className="about-details-label-box ">
              <p>Contact</p>
            </div>
            <div className="about-details-info-box">
              <p>
                <span>
                  <a href="mailto: kio.m0051@gmail.com">kio.m0051@gmail.com</a>
                </span>{" "}
                <br></br>
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="about-details">
            <div className="about-details-label-box ">
              <p>Web Development</p>
            </div>
            <div className="about-details-info-box">
              <p>
                colehorvitz.com
              </p>
            </div>
          </div>
          <div className="nav-fill-remaining"></div>
        </div>
        <div className="footer-border"></div>
      </div>
    );
  }
}

export default About;
