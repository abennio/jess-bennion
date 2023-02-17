import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Birkenhead Mural</h1>
        <p>This was a wall mural designed for Marriss House, a campus dedicated to teaching Nursing, 
            based in Birkenhead. The brief asked for a design that showcased the attractions in Birkenhead.</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
