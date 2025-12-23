import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Root from "./Components/Root";

// Lazy load all page components for better performance
const BirkenheadPage = React.lazy(() => import("./Components/Pages/Birkenhead/BirkenheadPage"));
const ChesterMuralPage = React.lazy(() => import("./Components/Pages/ChesterMural/ChesterMuralPage"));
const ChesterZooPage = React.lazy(() => import("./Components/Pages/ChesterZoo/ChesterZooPage"));
const RadioPage = React.lazy(() => import("./Components/Pages/Radio/RadioPage"));
const CWACPage = React.lazy(() => import("./Components/Pages/CWAC/CWACPage"));
const EmailsPage = React.lazy(() => import("./Components/Pages/Emails/EmailsPage"));
const IconsPage = React.lazy(() => import("./Components/Pages/Icons/IconsPage"));
const IntroPage = React.lazy(() => import("./Components/Pages/Intro/IntroPage"));
const KeepCupPage = React.lazy(() => import("./Components/Pages/KeepCup/KeepCupPage"));
const StudentNewsPage = React.lazy(() => import("./Components/Pages/StudentNews/StudentNewsPage"));
const UoCChristmasPage = React.lazy(() => import("./Components/Pages/UoCChristmas/UoCChristmasPage"));
const UoCTimelinePage = React.lazy(() => import("./Components/Pages/UoCTimeline/UoCTimelinePage"));
const WomenInTechPage = React.lazy(() => import("./Components/Pages/WomenInTech/WomenInTechPage"));
const ClearingPage = React.lazy(() => import("./Components/Pages/Clearing/ClearingPage.js"));
const StudentShoutOutPage = React.lazy(() => import("./Components/Pages/StudentShoutOut/StudentShoutOutPage.js"));
const UoCRebrandPage = React.lazy(() => import("./Components/Pages/UoCRebrand/UoCRebrandPage.js"));
const NoMatch = React.lazy(() => import("./Components/Pages/NoMatch/NoMatch"));
const Contact = React.lazy(() => import("./Components/Pages/Contact/contact.js"));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={<div className="loading">Loading...</div>}>
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
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}