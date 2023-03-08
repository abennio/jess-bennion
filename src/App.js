import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import BirkenheadPage from "./Components/Pages/Birkenhead/BirkenheadPage";
import ChesterMuralPage from "./Components/Pages/ChesterMural/ChesterMuralPage";
import ChesterZooPage from "./Components/Pages/ChesterZoo/ChesterZooPage";
import CoronavirusPage from "./Components/Pages/Coronavirus/CoronavirusPage";
import CWACPage from "./Components/Pages/CWAC/CWACPage";
import EmailsPage from "./Components/Pages/Emails/EmailsPage";
import IconsPage from "./Components/Pages/Icons/IconsPage";
import IntroPage from "./Components/Pages/Intro/IntroPage";
import KeepCupPage from "./Components/Pages/KeepCup/KeepCupPage";
import StudentNewsPage from "./Components/Pages/StudentNews/StudentNewsPage";
import UoCChristmasPage from "./Components/Pages/UoCChristmas/UoCChristmasPage";
import UoCTimelinePage from "./Components/Pages/UoCTimeline/UoCTimelinePage";
import WomenInTechPage from "./Components/Pages/WomenInTech/WomenInTechPage";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Root from "./Components/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/birkenhead" element={<BirkenheadPage />}></Route>
      <Route path="/chester-mural" element={<ChesterMuralPage />}></Route>
      <Route path="/chester-zoo" element={<ChesterZooPage />}></Route>
      <Route path="/coronavirus" element={<CoronavirusPage />}></Route>
      <Route path="/cwac" element={<CWACPage />}></Route>
      <Route path="/emails" element={<EmailsPage />}></Route>
      <Route path="/icons" element={<IconsPage />}></Route>
      <Route path="/intro" element={<IntroPage />}></Route>
      <Route path="/keep-cup" element={<KeepCupPage />}></Route>
      <Route path="/student-news" element={<StudentNewsPage />}></Route>
      <Route path="/uoc-christmas" element={<UoCChristmasPage />}></Route>
      <Route path="/uoc-timeline" element={<UoCTimelinePage />}></Route>
      <Route path="/women-in-tech" element={<WomenInTechPage />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
