import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold text-xl">{loggedInUser}</h1> }
          </UserContext.Consumer>
        </div>
        <h2>This is a food delivery application built in react</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
