import React from "react";
import ScreenCapture from "../../../portfolio-images/StudentShoutOut/screencapture-shoutout-chester-ac-uk-2024-09-23-09_32_58.png";
import logo from "../../../portfolio-images/StudentShoutOut/SSO-01.png";
import colours from "../../../portfolio-images/StudentShoutOut/SSO-02.png";
import uses from "../../../portfolio-images/StudentShoutOut/SSO-03.png";
import "./StudentShoutOutPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function StudentShoutOutPage() {
  return (
    <div className="student-shout-out-page">
      <NavBar />
      <div className="sso-container">
        <div className="sso-description">
          <h1>Student Shout Out</h1>
          <br></br>
          <p>
            I was asked to design a logo for the University of Chester student newspaper.
          </p>
        </div>
        <div className="sso-images">
          <img src={logo} className="sso-logo" alt="Student Shout Out" />
          <img src={colours} className="sso-colour" alt="Apply for Clearing" />
          <img src={uses} className="sso-uses" alt="Apply for Clearing" />
          <div className="scrollable-sso">
            <p>To see more of the webpage, hover over the below image and scroll:</p>
            <img src={ScreenCapture} className="sso-screen-capture" alt="Portrait of two women with text over the top of it saying 'Get World Ready'." />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentShoutOutPage;
