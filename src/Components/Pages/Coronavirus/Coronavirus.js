import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Coronavirus Poster</h1>
        <p>I was asked to design a poster for the Coronavirus test centre, they asked me to make it eye
          catching and interesting so people look at it. Therefore, I made it look fun so it could stand
          out against the other more serious, information based posters in the test centre.</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
