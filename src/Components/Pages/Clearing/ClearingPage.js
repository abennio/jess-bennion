import React from "react";
import clearing from "../../../portfolio-images/Clearing/Clearing Campaign.png";
import clearingGif from "../../../portfolio-images/Clearing/Clearing-ads-gif-300x600.gif"
import "./ClearingPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function ClearingPage() {
  return (
    <div className="clearing-page">
      <NavBar />
      <div className="split-page">
        <img src={clearing} className="clearing-image" alt="Portrait of two women with text over the top of it saying 'Get World Ready'." />
        <img src={clearingGif} className="clearing-gif-image" alt="Apply for Clearing" />
        <div className="description">
          <h1>Clearing Campaign</h1>
          <br></br>
          <p>
            I was asked to design a logo for the University of Chester student radio station. This was
            my favourite idea from my concepts.
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default ClearingPage;
