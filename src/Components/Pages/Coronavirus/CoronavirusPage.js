import React from "react";
import poster from "../../../portfolio-images/Coronavirus/Poster+for+Test+Centres.jpeg";
import "./CoronavirusPage.css";

function CoronavirusPage() {
  return (
    <div className="coronavirus-page">
      <img src={poster} className="coronavirus" alt="Coronavirus Poster" />
      <div>
        <h1>Coronavirus Poster</h1>
        <p>
          I was asked to design a poster for the Coronavirus test centre, they
          asked me to make it eye catching and interesting so people look at it.
          Therefore, I made it look fun so it could stand out against the other
          more serious, information based posters in the test centre.
        </p>
      </div>
    </div>
  );
}

export default CoronavirusPage;
