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
    <div className="flex justify-between shadow-lg">
      <div className="logo-items">
        {/* <img className="sideNav" src={SIDENAV_IMG} /> */}
        <img className="w-20 ml-4" src={LOGO_URL} />
      </div>
      <div className="flex align-middle">
        <ul className="flex p-4 m-4">
          <li className="px-4 hover:text-lime-600">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 hover:text-lime-600">
            {/* <a href="/about">About US</a> */}
            <Link className="link" to="/about">
              About Us{" "}
            </Link>
          </li>
          <li className="px-4 hover:text-lime-600">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 hover:text-lime-600">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className=" px-4 hover:text-lime-600">Online Status: {onlineStatus ? "✅" : "🔴"}</li>

          <li className="px-4 hover:text-lime-600">
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
