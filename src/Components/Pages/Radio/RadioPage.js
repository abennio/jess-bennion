import React from "react";
import radio from "../../../portfolio-images/Radio/CSR_CSR 1.png";
import "./RadioPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function RadioPage() {
  return (
    <div className="radio-page">
      <NavBar />
      <div className="split-page">
        <img src={radio} className="radio-image" alt="Radio logo" />
        <div className="description">
          <h1>Student Radio</h1>
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

export default RadioPage;
