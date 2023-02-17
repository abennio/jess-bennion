import * as React from "react";
import { Routes, Route, Layout, Switch } from "react-router-dom";
import Contact from "./Components/Contact/contact";
import Index from "./index";
import NoMatch from "./Components/NoMatch";
import { Navbar } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="contact" element={<Contact />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </Switch>
    </div>
  );
}
