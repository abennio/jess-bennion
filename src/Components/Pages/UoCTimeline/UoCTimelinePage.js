import React from "react";
import mural from "../../../portfolio-images/UoCTimeline/whole-mural.jpeg";
import start from "../../../portfolio-images/UoCTimeline/start-1847.png";
import middle1 from "../../../portfolio-images/UoCTimeline/1921-1976.png";
import middle2 from "../../../portfolio-images/UoCTimeline/1989-2009.png";
import end from "../../../portfolio-images/UoCTimeline/2013-end.png";
import honoraries from "../../../portfolio-images/UoCTimeline/honoraries-alumni.png";

import "./UoCTimelinePage.css";

function UoCTimelinePage() {
  return (
    <div className="timeline-page">
      <img
        src={mural}
        className="timeline"
        alt="The mural displayed on the Grosvenor building"
      />
      <div>
        <h1>University of Chester Timeline</h1>
        <p>
          The University has a process for accepting any suggestions staff may
          have to improve the University. A staff member suggested having a wall
          on campus to show a timeline of the University’s achievements over the
          years. I came up with an idea to keep it simple but eye-catching, on
          each panel it includes an illustration demonstrating what happened in
          that year. This was all designed in Adobe Illustrator.
        </p>
        <img
          src={start}
          className="timeline-start"
          alt="The first section of the mural"
        />
        <img
          src={middle1}
          className="timeline-middle1"
          alt="The second section of the mural"
        />
        <img
          src={middle2}
          className="timeline-middle2"
          alt="The third section of the mural"
        />
        <img
          src={end}
          className="timeline-end"
          alt="The fourth section of the mural"
        />
        <img
          src={honoraries}
          className="timeline-honoraries"
          alt="The final section of the mural"
        />
      </div>
    </div>
  );
}

export default UoCTimelinePage;
