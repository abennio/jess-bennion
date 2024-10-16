import React from "react";
import radioStyleGuide from "../../../portfolio-images/Radio/radio-style-guide.png";
import mediaStyleGuide from "../../../portfolio-images/Radio/media-style-guide.png";
import "./RadioPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function RadioPage() {
  return (
    <div className="radio-page">
      <NavBar />
      <div className="radio-container">
          <div className="radio-description">
            <h1>Student Radio</h1>
            <br></br>
            <p>
              I was asked to design a logo for the University of Chester student radio station. This was
              my favourite idea from my concepts.
            </p>
          </div>
        <img src={radioStyleGuide} className="radio-style-guide" alt="Three logos in a row that have a circle outlined in black with a radio wave at the bottom and 'radio' written in a bold font on top, with 'chester student' written within the circle above 'media'. Three logos each use different colours (yellow, purple, peach, and blue) and one option being in black and white." />
        <hr></hr>
        <img src={mediaStyleGuide} className="media-style-guide" alt="Three logos in a row that have a circle outlined in black with a radio wave at the bottom and 'media' written in a bold font on top, with 'chester student' written within the circle above 'media'. Three logos each use different colours (yellow, purple, peach, and blue) and one option being in black and white." />
      </div>
      <Footer />
    </div>
  );
}

export default RadioPage;
