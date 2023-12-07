import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About US</h1>
        <h2>This is a food delivery application built in react</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
