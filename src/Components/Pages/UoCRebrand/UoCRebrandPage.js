import React from "react";
import chesterLogo from "../../../portfolio-images/UoCRebrand/ID Work Template.jpg";
import campusLogos from "../../../portfolio-images/UoCRebrand/ID Work Template2.jpg";
import departmentLogos from "../../../portfolio-images/UoCRebrand/ID Work Template3.jpg";
import logos from "../../../portfolio-images/UoCRebrand/ID Work Template4.jpg";
import uses from "../../../portfolio-images/UoCRebrand/ID Work Template5.jpg";
import "./UoCRebrandPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function UoCRebrandPage() {
  return (
    <div className="uoc-rebrand-page">
      <NavBar />
      <div className="split-page">
        <img src={chesterLogo} className="chester-logo" alt="Portrait of two women with text over the top of it saying 'Get World Ready'." />
        <div className="description">
          <h1>Clearing Campaign</h1>
          <br></br>
          <p>
            I was asked to design a logo for the University of Chester student radio station. This was
            my favourite idea from my concepts.
          </p>
        </div>
        <img src={campusLogos} className="campus-logo" alt="Apply for Clearing" />
        <img src={departmentLogos} className="department-logo" alt="Apply for Clearing" />
        <img src={logos} className="logos" alt="Apply for Clearing" />
        <img src={uses} className="uses" alt="Apply for Clearing" />
      </div>
      <Footer />
    </div>
  );
}

export default UoCRebrandPage;
