import React from "react";
import "./UoCChristmasPage.css";


function UoCChristmasPage() {
  return (
    <div className="christmas-card-page">
      <div className="christmas-card-container">
        <div className="christmas-card-description">
          <h1>University of <br></br> Chester E-Card</h1>
          <p>
            The university design an e-card each year and this was the first year
            an animated version was designed. <br></br>The theme was deck the halls of
            residence, I drew a range of different accommodation in Illustrator
            and then animated it in After Effects.
          </p>
        </div>
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/rVWMjqYdUYc"
            title="University of Chester Christmas E-Card"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
      </div>
    </div>
  );
}

export default UoCChristmasPage;
