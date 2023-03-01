import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Keep Cup Design</h1>
        <p>The University wanted to hand out free keep cups for freshers in University accommodation
          as an incentive to avoid using coffee cups when purchasing coffee on campus. I was asked to design
          a cup that showed off the buildings on each of the campuses.</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
