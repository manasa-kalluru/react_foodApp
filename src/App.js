import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Divider from "./components/Divider";
import Footer from "./components/Footer";



const AppComponent = () => {
  return (
    <div className="app-component">
      <HeaderComponent />
      <Divider />
      <Body />
      <Divider />
      <Footer />
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppComponent />);
