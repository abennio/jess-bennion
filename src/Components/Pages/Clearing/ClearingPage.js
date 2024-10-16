import React from "react";
import clearing from "../../../portfolio-images/Clearing/Clearing Campaign.png";
import clearingGif from "../../../portfolio-images/Clearing/Clearing-ads-gif-300x600.gif";
import clearingStories from "../../../portfolio-images/Clearing/Clearing - Stories_15 Seconds.mp4";
import clearingSquare from "../../../portfolio-images/Clearing/Clearing Ad Example_Square.mp4";
import "./ClearingPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function ClearingPage() {
  return (
    <div className="clearing-page">
      <NavBar />
      <div className="clearing-container">
        <div className="clearing-page-description">
          <h1>Clearing Campaign</h1>
          <br></br>
          <p>
            The brief from the Marketing team at the University of Chester was to use `Get World Ready` 
            as the slogan and keep it in-keeping with the University of Chester branding. My idea was to overlay
            the text on images of students to demonstrate that the students are getting world ready by
            studying at the University of Chester.
          </p>
        </div>
        <div className="clearing-image-flex">
          <img src={clearing} className="clearing-image" alt="Portrait of two women with text over the top of it saying 'Get World Ready'." />
          <img src={clearingGif} className="clearing-gif-image" alt="Video promoting University of Chester" />
          <video className="clearing-stories" width="750" height="500" controls >
            <source src={clearingStories} type="video/mp4"/>
          </video>
          <video className="clearing-square" width="750" height="500" controls >
            <source src={clearingSquare} type="video/mp4"/>
          </video>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClearingPage;
