import { SIDENAV_IMG } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";

const HeaderComponent = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-items">
        <img className="sideNav" src={SIDENAV_IMG} />
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
        <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About US</a> */}
            <Link className="link" to="/about">About Us </Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="link" to="/grocery">Grocery</Link>
          </li>
          <li>Online Status: {onlineStatus? "✅" : "🔴"}</li>

          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName} 
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
