import React from "react";
import animation from "../../../portfolio-images/ChesterZoo/Animated+Illustrations.gif";
import facebook from "../../../portfolio-images/ChesterZoo/Chester+Zoo+FB+Advert.gif";
import geofilter from "../../../portfolio-images/ChesterZoo/Geofilter-01.png";
import banner from "../../../portfolio-images/ChesterZoo/Web+banner.jpeg";
import "./ChesterZooPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function ChesterZooPage() {
  return (
    <>
      <div className="chester-zoo-page">
        <NavBar />
        <div className="chester-zoo-description">
          <h1>Chester Zoo</h1>
          <br></br>
          <p>
            Chester Zoo were opening a new enclosure for their lions and needed
            a brand for this. I decided to play on the word ‘mane’ and say
            ‘Welcome to the mane attraction’, I also drew the animals in
            illustrator and came up with designs for a facebook ad, web banner
            for their website and a Snapchat Geofilter.
          </p>
        </div>
      </div>
      <div className="zoo-image-container">
        <div className="zoo-three-image-container">
          <div className="zoo-animation-and-desc">
            <h2>Animation</h2>
            <img
              src={animation}
              className="chester-zoo-animation"
              alt="Chester Zoo Animation"
            />
            <p>This animation was created to show on TV screens across the UK and on TVs across the Zoo.</p>
            <hr></hr>
          </div>
          <div className="zoo-banner-and-desc">
            <h2>Website Banner</h2>
            <img
              src={banner}
              className="chester-zoo-banner"
              alt="Chester Zoo Web Banner"
            />
            <p>As part of the brief set by Chester Zoo, a website banner was required so that they could
               use it on their website as the hero banner on their home page.</p>
            <hr></hr>
          </div>
          <div className="zoo-facebook-and-desc">
            <h2>Facebook Ad</h2>
            <img
              src={facebook}
              className="chester-zoo-facebook"
              alt="Chester Zoo Facebook Advert"
            />
            <p>Chester Zoo's marketing plan included advertising the new attraction on Facebook. To make 
              this stand out from other adverts on Facebook I decided to animate it. The shaking of the 
              "ROOOAAAAARRRRRRR" text was added to catch the viewers eye, it needed to be short and
              sweet to get the message across as succinctly as possible.</p>
            <hr></hr>
          </div>
        </div>
        <div className="zoo-geofilter-and-desc">
          <h2>Snapchat Geofilter</h2>
          <img
            src={geofilter}
            className="chester-zoo-geofilter"
            alt="Chester Zoo Geofilter"
          />
          <p>I decided to also create a Lion geofilter because this can be added to Snapchat for free and
            allows Chester Zoo visitors to share Snapchat messages whilst they're viewing the new attraction.
            This is a great idea to encourage visitors to spread the word without it looking like an advert.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChesterZooPage;
