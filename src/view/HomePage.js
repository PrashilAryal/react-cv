import React, { Component } from "react";
import myPhoto from "../assets/images/myPhoto.jpg";
import MyDetails from "./MyDetails";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="portfolioSection">
          <div className="myPhoto__container">
            <img alt="Prashil Aryal" src={myPhoto} />
          </div>
          <MyDetails></MyDetails>
        </div>
      </div>
    );
  }
}
