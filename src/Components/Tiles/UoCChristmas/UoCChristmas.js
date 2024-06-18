import React from "react";
import christmas from "../../../portfolio-images/UoCChristmas/UoC-Christmas-Card.png";
import "./UoCChristmas.css";

function UoCChristmas() {
  return (
    <div className="christmas-card">
      <img
        src={christmas}
        className="christmas"
        alt="An illustration of two semi-detached houses with Christmas decorations and snow"
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Christmas Card</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default UoCChristmas;
