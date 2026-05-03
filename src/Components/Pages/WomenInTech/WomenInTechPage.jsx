import React from "react";
import modern from "../../../portfolio-images/WomenInTech/Women+in+Tech+-+Modern.gif";
import retro from "../../../portfolio-images/WomenInTech/Women+in+Tech+Retro.gif";
import "./WomenInTechPage.css";


function WomenInTechPage() {
  return (
    <div className="women-in-tech-page">
      <div className="women-in-tech-container">
        <div className="women-in-tech-description">
          <h1>Women in Tech</h1>
          <p>
            I was asked to design a social media post which included motion
            design. I came up with a couple of ideas, one was retro so it worked
            alongside current trends and the other was a more modern take on the
            idea. The idea was to have an eye catching intro so people on
            Instagram would stop and watch the videos to follow in the carousel.
          </p>
          <div className="women-images">
            <img
              src={modern}
              className="women-modern"
              alt="Animation of someone coding on a modern interface"
            />
            <img
              src={retro}
              className="women-retro"
              alt="Animation of someone coding on a retro interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomenInTechPage;
