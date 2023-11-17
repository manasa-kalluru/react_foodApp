import React from "react";
import ReactDOM from "react-dom/client";

// React ELement
const heading = (
  <h1 className="heading" tabIndex={5}>
    Namaste react from JSX
  </h1>
);

// React Functional Component
const HeadingComponent = () => <h1>Namaste React Functional Component</h1>;

const number = 1000;
// Component composition
const HeadingComponent2 = () => (
  <div id="container">
    <h1>Number is {number}</h1>
    {heading}

    <HeadingComponent>Rhowjefopiwdefpwepeat</HeadingComponent>
    <h1 className="heading2">
      Namaste React Functional Component with className
    </h1>
  </div>
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeadingComponent2 />);
