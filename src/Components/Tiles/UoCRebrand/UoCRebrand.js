import React from "react";
import rebrand from "../../../portfolio-images/UoCRebrand/UoC-rebrand-tile.png";
import "./UoCRebrand.css";

function UoCRebrand() {
  return (
    <div className="uoc-rebrand">
      <img src={rebrand} className="uoc-rebrand-logo" alt="A shield with thick black lines" />
      <div className="text-overlay">
        <div className="text">
          <h1>University of Chester Rebrand</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default UoCRebrand;
