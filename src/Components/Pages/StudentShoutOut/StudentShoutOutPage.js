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
      <div className="split-page">
        <img src={logo} className="sso-logo" alt="Apply for Clearing" />
        <img src={ScreenCapture} className="screen-capture" alt="Portrait of two women with text over the top of it saying 'Get World Ready'." />
        <img src={colours} className="logo" alt="Apply for Clearing" />
        <img src={uses} className="logo" alt="Apply for Clearing" />
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

export default StudentShoutOutPage;
