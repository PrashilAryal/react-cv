import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__listContainer">
          <ul className="navbar__listContainer__list">
            <li className="navbar__name">PRASHIL</li>
            <li>BLOG</li>
            <li>CONTACT</li>
            <li>EDUCATION</li>
            <li>SKILL</li>
            <li>PORTFOLIO</li>
            <li>HOME</li>
          </ul>
        </div>
      </div>
    );
  }
}
