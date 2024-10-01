import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BirkenheadPage from "./Components/Pages/Birkenhead/BirkenheadPage";
import ChesterMuralPage from "./Components/Pages/ChesterMural/ChesterMuralPage";
import ChesterZooPage from "./Components/Pages/ChesterZoo/ChesterZooPage";
import RadioPage from "./Components/Pages/Radio/RadioPage";
import CWACPage from "./Components/Pages/CWAC/CWACPage";
import EmailsPage from "./Components/Pages/Emails/EmailsPage";
import IconsPage from "./Components/Pages/Icons/IconsPage";
import IntroPage from "./Components/Pages/Intro/IntroPage";
import KeepCupPage from "./Components/Pages/KeepCup/KeepCupPage";
import StudentNewsPage from "./Components/Pages/StudentNews/StudentNewsPage";
import UoCChristmasPage from "./Components/Pages/UoCChristmas/UoCChristmasPage";
import UoCTimelinePage from "./Components/Pages/UoCTimeline/UoCTimelinePage";
import WomenInTechPage from "./Components/Pages/WomenInTech/WomenInTechPage";
import ClearingPage from "./Components/Pages/Clearing/ClearingPage.js";
import StudentShoutOutPage from "./Components/Pages/StudentShoutOut/StudentShoutOutPage.js";
import UoCRebrandPage from "./Components/Pages/UoCRebrand/UoCRebrandPage.js";
import NoMatch from "./Components/Pages/NoMatch/NoMatch";
import Contact from "./Components/Pages/Contact/contact.js";
import Root from "./Components/Root";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jess-bennion" element={<Root />} />
        <Route path="/birkenhead" element={<BirkenheadPage />} />
        <Route path="/chester-mural" element={<ChesterMuralPage />} />
        <Route path="/chester-zoo" element={<ChesterZooPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/cwac" element={<CWACPage />} />
        <Route path="/emails" element={<EmailsPage />} />
        <Route path="/icons" element={<IconsPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/keep-cup" element={<KeepCupPage />} />
        <Route path="/student-news" element={<StudentNewsPage />} />
        <Route path="/uoc-christmas" element={<UoCChristmasPage />} />
        <Route path="/uoc-timeline" element={<UoCTimelinePage />} />
        <Route path="/women-in-tech" element={<WomenInTechPage />} />
        <Route path="/clearing" element={<ClearingPage />} />
        <Route path="/student-shout-out" element={<StudentShoutOutPage />} />
        <Route path="/uoc-rebrand" element={<UoCRebrandPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);