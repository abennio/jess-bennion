import React from "react";
import clearing from "../../../portfolio-images/Clearing/clearing-tile.png";
import "./Clearing.css";

function Clearing() {
  return (
    <div className="clearing">
      <img
        src={clearing}
        className="clearing-tile-image"
        alt="Two girls, one looking up and the other looking down with overlayed text that says 'Get World Ready'."
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Clearing Campaign</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default Clearing;
