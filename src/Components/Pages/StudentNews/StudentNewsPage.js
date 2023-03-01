import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Student News Website</h1>
        <p>I worked alongside a Web Developer to build Student News, a website to keep
          Students up-to-date with current University of Chester news relevant to students. I designed
          the website and I also create and update all the content.</p>
      </div>
      <div>
        <p>Homepage</p>
        <p>Example of an article</p>
        <p>Example of an article</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
