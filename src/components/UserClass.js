import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        count2: 1
    }
  }
  render() {
    const {name, location} = this.props;
    const {count} = this.state;
    return (
      <div className="user-card">
        <h3>{name}</h3>
        <p>Count - {count}</p>
        <p>Count2 - {this.state.count2}</p>
        <p>{location}</p>
        <p>Contact: @manasa-k</p>
      </div>
    );
  }
}

export default UserClass;
