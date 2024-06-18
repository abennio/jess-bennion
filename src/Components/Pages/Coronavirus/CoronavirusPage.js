import React from "react";
import poster from "../../../portfolio-images/Coronavirus/Poster+for+Test+Centres.jpeg";
import "./CoronavirusPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function CoronavirusPage() {
  return (
    <div className="coronavirus-page">
      <NavBar />
      <div className="description">
        <h1>Coronavirus Poster</h1>
        <br></br>
        <p>
          I was asked to design a poster for the Coronavirus test centre, they
          asked me to make it eye catching and interesting so people look at it.
          Therefore, I made it look fun so it could stand out against the other
          more serious, information based posters in the test centre.
        </p>
      </div>
      <img src={poster} className="coronavirus-image" alt="Coronavirus Poster" />
      <Footer />
    </div>
  );
}

export default CoronavirusPage;
