import React from "react";
import radioStyleGuide from "../../../portfolio-images/Radio/CSR_CSR 1.png";
import mediaStyleGuide from "../../../portfolio-images/Radio/CSR_CSM 1.png";
import radioLogoColourFill from "../../../portfolio-images/Radio/CSR_CSM Logos-01.png";
import radioLogoColourOutline from "../../../portfolio-images/Radio/CSR_CSM Logos-02.png";
import radioLogoBW from "../../../portfolio-images/Radio/CSR_CSM Logos-03.png";
import mediaLogoColourFill from "../../../portfolio-images/Radio/CSR_CSM Logos-04.png";
import mediaLogoColourOutline from "../../../portfolio-images/Radio/CSR_CSM Logos-05.png";
import mediaLogoBW from "../../../portfolio-images/Radio/CSR_CSM Logos-06.png";
import "./RadioPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function RadioPage() {
  return (
    <div className="radio-page">
      <NavBar />
      <div className="split-radio-page">
            <img src={radioLogoColourFill} className="radio-logo-colour" alt="Circle with a pink gradient that goes into orange, outlined in black with a radio wave at the bottom and 'radio' written in a bold, yellow font on top, with 'chester student' written in a black plain font within the circle above 'radio'." />
          <div className="radio-description">
            <h1>Student Radio</h1>
            <br></br>
            <p>
              I was asked to design a logo for the University of Chester student radio station. This was
              my favourite idea from my concepts.
            </p>
          </div>
        </div>
        <img src={radioStyleGuide} className="radio-style-guide" alt="Radio logo style guide displaying the different colours that can be used (yellow, purple, peach, and blue)" />
        <img src={radioLogoColourFill} className="radio-logo-colour-1" alt="Circle with a pink gradient that goes into orange, outlined in black with a radio wave at the bottom and 'radio' written in a bold, yellow font on top, with 'chester student' written in a black plain font within the circle above 'radio'." />
        <img src={radioLogoColourOutline} className="radio-logo-colour-outline" alt="Circle with a pink gradient that goes into orange outlining a black line with a radio wave at the bottom and 'radio' written in a bold, yellow font on top, with 'chester student' written in a black plain font within the circle above 'radio'." />
        <img src={radioLogoBW} className="radio-logo-bw" alt="A black lined circle with a radio wave at the bottom and 'radio' written in a bold font on top, with 'chester student' written in a black plain font within the circle above 'radio'." />
        <img src={mediaStyleGuide} className="media-style-guide" alt="Media logo style guide displaying the different colours that can be used (yellow, purple, peach, and blue)" />
        <img src={mediaLogoColourFill} className="media-logo-colour" alt="Circle with a pink gradient that goes into orange, outlined in black with a radio wave at the bottom and 'media' written in a bold, light blue font on top, with 'chester student' written within the circle above 'media'." />
        <img src={mediaLogoColourOutline} className="media-logo-colour-outline" alt="Circle with a pink gradient that goes into orange outlining a black line with a radio wave at the bottom and 'media' written in a bold, light blue font on top, with 'chester student' written in a black plain font within the circle above 'media'." />
        <img src={mediaLogoBW} className="media-logo-bw" alt="A black lined circle with a radio wave at the bottom and 'media' written in a bold font on top, with 'chester student' written in a black plain font within the circle above 'media'." />
      <Footer />
    </div>
  );
}

export default RadioPage;
