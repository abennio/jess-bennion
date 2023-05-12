import React from "react";
import icons from "../../../portfolio-images/Icons/icons-portfolio.png";
import "./IconsPage.css";

function IconsPage() {
  return (
    <div className="birkenhead-page">
      <img src={icons} className="icons" alt="Icons" />
      <div>
        <h1>University of Chester Icons</h1>
        <p>
          These are icons that were used in the University of Chester’s
          marketing materials, including the corporate website, prospectuses and
          other printed materials.
        </p>
      </div>
    </div>
  );
}

export default IconsPage;
