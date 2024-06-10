import React from "react";
import "./Root.css";
import Birkenhead from "../Components/Tiles/Birkenhead/Birkenhead";
import ChesterMural from "../Components/Tiles/ChesterMural/ChesterMural";
import ChesterZoo from "../Components/Tiles/ChesterZoo/ChesterZoo";
import Coronavirus from "../Components/Tiles/Coronavirus/Coronavirus";
import CWAC from "../Components/Tiles/CWAC/CWAC";
import Emails from "../Components/Tiles/Emails/Emails";
import Icons from "../Components/Tiles/Icons/Icons";
import Intro from "../Components/Tiles/Intro/Intro";
import KeepCup from "../Components/Tiles/KeepCup/KeepCup";
import StudentNews from "../Components/Tiles/StudentNews/StudentNews";
import UoCChristmas from "../Components/Tiles/UoCChristmas/UoCChristmas";
import UoCTimeline from "../Components/Tiles/UoCTimeline/UoCTimeline";
import WomenInTech from "../Components/Tiles/WomenInTech/WomenInTech";
import NavBar from "../Components/Navbar/navbar.js";
import Footer from "../Components/Footer/footer";
import { Link, RouterProvider } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="root">
        <NavBar />
        <div className="container">
          <RouterProvider>
            <Link to="/birkenhead" className="link">
              <Birkenhead />
            </Link>
            <Link to="/icons" className="link">
              <Icons />
            </Link>
            <Link to="/chester-mural" className="link">
              <ChesterMural />
            </Link>
            <Link to="/chester-zoo" className="link">
              <ChesterZoo />
            </Link>
            <Link to="/coronavirus" className="link">
              <Coronavirus />
            </Link>
            <Link to="/cwac" className="link">
              <CWAC />
            </Link>
            <Link to="/emails" className="link">
              <Emails />
            </Link>
            <Link to="/intro" className="link">
              <Intro />
            </Link>
            <Link to="/student-news" className="link">
              <StudentNews />
            </Link>
            <Link to="/keep-cup" className="link">
              <KeepCup />
            </Link>
            <Link to="/christmas" className="link">
              <UoCChristmas />
            </Link>
            <Link to="/timeline" className="link">
              <UoCTimeline />
            </Link>
            <Link to="/women-in-tech" className="link">
              <WomenInTech />
            </Link>
          </RouterProvider>
        </div>
        <Footer />
      </div>
    </>
  );
}
