import { SIDENAV_IMG } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Selector - subscribing to the store
  const cartItems = useSelector((store) => store.cart.items); 
  console.log(cartItems);

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
          <li className="px-4 text-orange-600 hover:text-lime-600">
            <Link className="link" to="/cart">
              Cart({cartItems.length} items)
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
