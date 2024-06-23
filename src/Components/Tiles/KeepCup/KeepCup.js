import React from "react";
import cup from "../../../portfolio-images/KeepCup/Keep-Cup.png";
import "./KeepCup.css";

function KeepCup() {
  return (
    <div className="cup">
      <img
        src={cup}
        className="binks-tile"
        alt="Illustration of the Binks building at University of Chester"
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Keep Cup</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default KeepCup;
