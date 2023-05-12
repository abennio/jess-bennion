import React from "react";
import phone from "../../../portfolio-images/CWAC/CWAC.png";
import "./CWAC.css";

function CWAC() {
  return (
    <div className="cwac">
      <img
        src={phone}
        className="cwac-phone"
        alt="phone with a text message conversation on the screen"
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Cheshire West and Chester</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default CWAC;
