import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>University of Chester Timeline</h1>
        <p>The University has a process for accepting any suggestions staff may have to improve the University.
          A staff member suggested having a wall on campus to show a timeline of the University’s achievements over the years.
          I came up with an idea to keep it simple but eye-catching, on each panel it includes an illustration demonstrating
          what happened in that year. This was all designed in Adobe Illustrator.</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
