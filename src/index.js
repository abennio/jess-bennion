import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Birkenhead from "./Components/Tiles/Birkenhead/Birkenhead";
import ChesterMural from "./Components/Tiles/ChesterMural/ChesterMural"
import ChesterZoo from "./Components/Tiles/ChesterZoo/ChesterZoo"
import Coronavirus from "./Components/Tiles/Coronavirus/Coronavirus"
import CWAC from "./Components/Tiles/CWAC/CWAC"
import Emails from "./Components/Tiles/Emails/Emails"
import Icons from "./Components/Tiles/Icons/Icons"
import Intro from "./Components/Tiles/Intro/Intro"
import KeepCup from "./Components/Tiles/KeepCup/KeepCup"
import StudentNews from "./Components/Tiles/StudentNews/StudentNews"
import UoCChristmas from "./Components/Tiles/UoCChristmas/UoCChristmas"
import UoCTimeline from "./Components/Tiles/UoCTimeline/UoCTimeline"
import WomenInTech from "./Components/Tiles/WomenInTech/WomenInTech"
import NavBar from "./Components/NavBar/navbar";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <NavBar />
      <div className="container">
        <Birkenhead />
        <Icons />
        <ChesterMural />
        <ChesterZoo />
        <Coronavirus />
        <CWAC />
        <Emails />
        <Intro />
        <KeepCup />
        <StudentNews />
        <UoCChristmas />
        <UoCTimeline />
        <WomenInTech />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
