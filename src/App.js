import React, { Component } from "react";
import "./assets/css/home.css";
import NavBar from "./components/common/NavBar";
import HomePage from "./view/HomePage";
export default class App extends Component {
  render() {
    return (
      <div className="body">
        <NavBar></NavBar>
        <HomePage></HomePage>
      </div>
    );
  }
}
