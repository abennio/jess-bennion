import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>University of Chester Icons</h1>
        <p>These are icons that were used in the University of Chester’s marketing
          materials, including the corporate website, prospectuses and other printed materials.</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
