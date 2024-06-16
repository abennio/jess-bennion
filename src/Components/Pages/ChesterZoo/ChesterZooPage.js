import React from "react";
import zoo from "../../../portfolio-images/ChesterZoo/Chester-Zoo.png";
import animation from "../../../portfolio-images/ChesterZoo/Animated+Illustrations.gif";
import facebook from "../../../portfolio-images/ChesterZoo/Chester+Zoo+FB+Advert.gif";
import geofilter from "../../../portfolio-images/ChesterZoo/Geofilter-01.png";
import banner from "../../../portfolio-images/ChesterZoo/Web+banner.jpeg";
import "./ChesterZooPage.css";
import NavBar from "../../Navbar/navbar";


function ChesterZooPage() {
  return (
    <>
      <div className="chester-zoo-page">
        <NavBar />
        <img src={zoo} className="chester-zoo" alt="Chester Zoo Logo" />
        <div>
          <h1>Chester Zoo</h1>
          <p>
            Chester Zoo were opening a new enclosure for their lions and needed
            a brand for this. I decided to play on the word ‘mane’ and say
            ‘Welcome to the mane attraction’, I also drew the animals in
            illustrator and came up with designs for a facebook ad, web banner
            for their website and a Snapchat Geofilter.
          </p>
        </div>
      </div>
      <div>
        <img
          src={animation}
          className="chester-zoo-animation"
          alt="Chester Zoo Animation"
        />
        <p>Animation</p>
        <img
          src={banner}
          className="chester-zoo-banner"
          alt="Chester Zoo Web Banner"
        />
        <p>Website Banner</p>
        <img
          src={facebook}
          className="chester-zoo-facebook"
          alt="Chester Zoo Facebook Advert"
        />
        <p>Facebook Ad</p>
        <img
          src={geofilter}
          className="chester-zoo-geofilter"
          alt="Chester Zoo Geofilter"
        />
        <p>Snapchat Geofilter</p>
      </div>
    </>
  );
}

export default ChesterZooPage;
