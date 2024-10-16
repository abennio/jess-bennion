import React from "react";
import icons from "../../../portfolio-images/Icons/icons-portfolio.png";
import "./IconsPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function IconsPage() {
  return (
    <div className="icons-page">
      <NavBar />
      <div className="icons-container">
        <div className="icons-description">
          <h1>University of <br></br> Chester Icons</h1>
          <br></br>
          <p>
            These are icons that were used in the University of Chester’s
            marketing materials, including the corporate website, prospectuses and
            other printed materials.
          </p>
        </div>
        <img src={icons} className="icons-image" alt="Icons" />
      </div>
      <Footer />
    </div>
  );
}

export default IconsPage;
