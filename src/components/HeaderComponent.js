import { SIDENAV_IMG } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const HeaderComponent = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-items">
        <img className="sideNav" src={SIDENAV_IMG} />
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Location</li>
          <li>Cart</li>
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
