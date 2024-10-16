import React from "react";
import campusLogos from "../../../portfolio-images/UoCRebrand/campus-logos.png";
import departmentLogos from "../../../portfolio-images/UoCRebrand/department-logos.png";
import logos from "../../../portfolio-images/UoCRebrand/logos.png";
import uses from "../../../portfolio-images/UoCRebrand/ID Work Template5.jpg";
import "./UoCRebrandPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function UoCRebrandPage() {
  return (
    <div className="uoc-rebrand-page">
      <NavBar />
      <div className="uoc-rebrand-container">
        <div className="uoc-rebrand-description">
          <h1>University of Chester Rebrand</h1>
          <br></br>
          <p>
            I was asked to design a logo for the University of Chester student radio station. This was
            my favourite idea from my concepts.
          </p>
        </div>
        <h2>Campus Logos</h2>
        <img src={campusLogos} className="campus-logo" alt="Apply for Clearing" />
        <hr></hr>
        <h2 className="uoc-rebrand-titles">University of Chester Logos</h2>
        <img src={logos} className="logos" alt="Apply for Clearing" />
        <hr></hr>
        <h2 className="uoc-rebrand-titles">Department Logos</h2>
        <img src={departmentLogos} className="department-logo" alt="Apply for Clearing" />
        <hr></hr>
        <h2 className="uoc-rebrand-titles">Examples of how the branding can be used</h2>
        <img src={uses} className="uses" alt="Apply for Clearing" />
      </div>
      <Footer />
    </div>
  );
}

export default UoCRebrandPage;
