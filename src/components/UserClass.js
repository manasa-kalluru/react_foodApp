import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Name",
        location: "Location",
      },
    };
     console.log(this.state.userInfo.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.state.userInfo.name + " Child Component Did Mount");
    // API Call

    const data = await fetch("https://api.github.com/users/manasa-kalluru");
    const json = await data.json();
    //console.log(json);
    this.setState({
        userInfo: json,
    });
  }

  componentDidUpdate () {
    console.log("Component Did Update");
  }

  render() {
    console.log(this.state.userInfo.name + " Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <p>Location: {location}</p>
        <p>Contact: @manasa-k</p>
      </div>
    );
  }
}

export default UserClass;
