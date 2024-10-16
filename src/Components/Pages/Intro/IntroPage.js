import React from "react";
import "./IntroPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function IntroPage() {
  return (
    <div className="intro-page">
      <NavBar />
      <div className="intro-container">
        <div className="intro-description">
          <h1>Introduction Videos</h1>
          <p>
            I was asked to animate some explainer videos aimed at new students.
            These were all created in Illustrator and animated in After Effects.
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2Kmic7bqbPM"
            title="How will this resource help me with my assessments at University"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yry7L_ZVfrg"
            title="2 How is Higher Education different and why"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LDnzY3Er2vg"
            title="5 What feedback can I expect and how do I get the most out of it Audio"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IntroPage;
