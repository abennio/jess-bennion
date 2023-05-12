import React from "react";
import poster from "../../../portfolio-images/Coronavirus/poster.png";
import "./Coronavirus.css";

function Coronavirus() {
  return (
    <div className="coronavirus">
      <img
        src={poster}
        className="coronavirus-poster"
        alt="Chester Building Illustration"
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Coronavirus</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default Coronavirus;
