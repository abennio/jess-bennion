import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Birkenhead from "./Components/Pages/Birkenhead/Birkenhead";
import ChesterMural from "./Components/Pages/ChesterMural/ChesterMural";
import ChesterZoo from "./Components/Pages/ChesterZoo/ChesterZoo";
import Coronavirus from "./Components/Pages/Coronavirus/Coronavirus";
import CWAC from "./Components/Pages/CWAC/CWAC";
import Emails from "./Components/Pages/Emails/Emails";
import Icons from "./Components/Pages/Icons/Icons";
import Intro from "./Components/Pages/Intro/Intro";
import KeepCup from "./Components/Pages/KeepCup/KeepCup";
import StudentNews from "./Components/Pages/StudentNews/StudentNews";
import UoCChristmas from "./Components/Pages/UoCChristmas/UoCChristmas";
import UoCTimeline from "./Components/Pages/UoCTimeline/UoCTimeline";
import WomenInTech from "./Components/Pages/WomenInTech/WomenInTech";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Home from "./Components/Pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/birkenhead" element={<Birkenhead />}></Route>
      <Route path="/chester-mural" element={<ChesterMural />}></Route>
      <Route path="/chester-zoo" element={<ChesterZoo />}></Route>
      <Route path="/coronavirus" element={<Coronavirus />}></Route>
      <Route path="/cwac" element={<CWAC />}></Route>
      <Route path="/emails" element={<Emails />}></Route>
      <Route path="/icons" element={<Icons />}></Route>
      <Route path="/intro" element={<Intro />}></Route>
      <Route path="/keep-cup" element={<KeepCup />}></Route>
      <Route path="/student-news" element={<StudentNews />}></Route>
      <Route path="/uoc-christmas" element={<UoCChristmas />}></Route>
      <Route path="/uoc-timeline" element={<UoCTimeline />}></Route>
      <Route path="/women-in-tech" element={<WomenInTech />}></Route>
      <Route path="/contact-me" element={<ContactUs />}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
