import React from "react";
import card from "../../../portfolio-images/UoCChristmas/UoC-Christmas-Card.png";
import "./UoCChristmasPage.css";

function UoCChristmasPage() {
  return (
    <div className="christmas-card-page">
      <img
        src={card}
        className="christmas-card"
        alt="University of Chester Christmas animation for an e-card"
      />
      <div>
        <h1>University of Chester E-Card</h1>
        <p>
          The university design an e-card each year and this was the first year
          an animated version was designed. The theme was deck the halls of
          residence, I drew a range of different accommodation in Illustrator
          and then animated it in After Effects.
        </p>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
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
