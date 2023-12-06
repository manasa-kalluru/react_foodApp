import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return <div className="user-card">
        <h3>{props.name} </h3>
        <p>Count - {count}</p>
        <p>Count2 - {count2}</p>
        <p>Location: Cincinnati</p>
        <p>Contact: @manasa-k</p>
    </div>
}

export default User;