import React from "react";
import icons from "../../../portfolio-images/Icons/icons-portfolio.png";
import "./Icons.css";

function Icons() {
  return (
    <div className="icons">
      <img
        src={icons}
        className="icons-portfolio"
        alt="A display of icons including a compass, lightbulb and sandwich"
      />
      <div className="text-overlay">
        <div className="text">
          <h1>Icons</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default Icons;
