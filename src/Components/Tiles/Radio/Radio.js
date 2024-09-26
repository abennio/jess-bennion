import React from "react";
import radio from "../../../portfolio-images/Radio/radio-logo-tile.png";
import "./Radio.css";

function Radio() {
  return (
    <div className="radio">
      <img
        src={radio}
        className="radio-logo"
        alt="Chester Building Illustration"
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Student Radio</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default Radio;
