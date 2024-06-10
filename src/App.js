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
import NoMatch from "./Components/Pages/NoMatch/NoMatch";
import Contact from "./Components/Contact/contact";
import Root from "./Components/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NoMatch />}>
      <Route path="/birkenhead" element={<BirkenheadPage />} />
      <Route path="/chester-mural" element={<ChesterMuralPage />} />
      <Route path="/chester-zoo" element={<ChesterZooPage />} />
      <Route path="/coronavirus" element={<CoronavirusPage />} />
      <Route path="/cwac" element={<CWACPage />} />
      <Route path="/emails" element={<EmailsPage />} />
      <Route path="/icons" element={<IconsPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/keep-cup" element={<KeepCupPage />} />
      <Route path="/student-news" element={<StudentNewsPage />} />
      <Route path="/uoc-christmas" element={<UoCChristmasPage />} />
      <Route path="/uoc-timeline" element={<UoCTimelinePage />} />
      <Route path="/women-in-tech" element={<WomenInTechPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
