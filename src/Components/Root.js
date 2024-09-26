import React from "react";
import "./Root.css";
import Birkenhead from "../Components/Tiles/Birkenhead/Birkenhead";
import ChesterMural from "../Components/Tiles/ChesterMural/ChesterMural";
import ChesterZoo from "../Components/Tiles/ChesterZoo/ChesterZoo";
import Radio from "./Tiles/Radio/Radio.js";
import CWAC from "../Components/Tiles/CWAC/CWAC";
import Emails from "../Components/Tiles/Emails/Emails";
import Icons from "../Components/Tiles/Icons/Icons";
import Intro from "../Components/Tiles/Intro/Intro";
import KeepCup from "../Components/Tiles/KeepCup/KeepCup";
import StudentNews from "../Components/Tiles/StudentNews/StudentNews";
import UoCChristmas from "../Components/Tiles/UoCChristmas/UoCChristmas";
import UoCTimeline from "../Components/Tiles/UoCTimeline/UoCTimeline";
import WomenInTech from "../Components/Tiles/WomenInTech/WomenInTech";
import UoCRebrand from "../Components/Tiles/UoCRebrand/UoCRebrand.js";
import Clearing from "../Components/Tiles/Clearing/Clearing.js"
import StudentShoutOut from "../Components/Tiles/StudentShoutOut/StudentShoutOut.js"
import NavBar from "../Components/Navbar/navbar.js";
import Footer from "../Components/Footer/footer";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="root">
        <NavBar />
        <div className="page-container">
          <div className="link-image">
            <Link to="/birkenhead">
                <Birkenhead />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/women-in-tech">
              <WomenInTech />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/chester-mural">
              <ChesterMural />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/chester-zoo">
              <ChesterZoo />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/radio">
              <Radio />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/cwac">
              <CWAC />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/emails">
              <Emails />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/intro">
              <Intro />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/student-news">
              <StudentNews />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/keep-cup">
              <KeepCup />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/icons">
                <Icons />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/uoc-christmas">
              <UoCChristmas />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/uoc-timeline">
              <UoCTimeline />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/uoc-rebrand">
              <UoCRebrand />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/clearing">
                <Clearing />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/student-shout-out">
                <StudentShoutOut />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      
      <Outlet />
    </>
  );
}
