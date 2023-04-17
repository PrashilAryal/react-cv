import React, { Component } from "react";
import Button from "../components/button";

export default class MyDetails extends Component {
  render() {
    return (
      <div className="myDetails__container">
        <h5>UI/UX Developer</h5>
        <h4>Professional Profile</h4>
        <p>
          Hi there, I'm a full stack developer with a passion for technology and
          problem-solving. I have a strong technical background and am
          proficient in programming languages such as JavaScript, HTML, CSS, and
          others.
        </p>
        <p>
          I'm always eager to learn new things and stay up-to-date with the
          latest industry trends and developments. I enjoy working on both
          front-end and back-end development, which allows me to create robust,
          scalable, and efficient applications that meet the needs of my
          clients. Collaboration is important to me, and I enjoy working
          effectively with cross-functional teams and clients. I'm committed to
          delivering high-quality work, and I take pride in the solutions I
          create.
        </p>
        <p>
          I believe that each project is an opportunity to learn and grow, and I
          strive to create solutions that exceed my clients' expectations.
          Thanks for checking out my website!
        </p>
        <Button></Button>
      </div>
    );
  }
}
