import React from "react";
import ReactDOM from "react-dom/client";

/*
App Component
- Header
- Body 
- Footer
Header Component
- Hamburger Button
- Logo
- Current Location
- Search Bar
- Cart
Body Component
- Resteraunt Container
  - Resteraunt Cards
     - Image
     - Resteraunt Name
     - Rating
     - Delivery Charges
     - Delivery time
Footer Component
- Logo
- Links
- Download from Appstore, Playstore
- Facebook, Twitter, Instagram
- Terms Links


*/

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-items">
      <img className="sideNav" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" />
      <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/008/480/741/small/burger-icon-simple-colored-burger-icon-fast-food-logo-free-png.png" />
      </div>
      <div className="nav-items">
      <ul>
        <li>Location</li>
        <li>SearchBar</li>
        <li>Cart</li>
      </ul>
      </div>
    </div>
  );
};
const Divider = () => {
  return (
    <hr className="divider"></hr>
  );
}

const ResterauntCard = () => {
  return (
    <div className="res-card">
      <img className="res-image" src="https://www.foodandwine.com/thmb/97PY4E6Wk95IYv1_8pDZvBEi0Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg"/>
      <h3>Pasteria</h3>
      <h5>4.3</h5>
      <h5>$10 Delivery Fee</h5>
      <h5>20-30 minutes</h5>
    </div>
  );
}

const Body = () => {
  return (
    <div className="resteraunt-container">
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      <ResterauntCard />
      
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/008/480/741/small/burger-icon-simple-colored-burger-icon-fast-food-logo-free-png.png" />
      <ul>
        <li><h4>About US</h4></li>
        <li><h4>Contact US</h4></li>
      </ul>
      </div>
  );
}

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
