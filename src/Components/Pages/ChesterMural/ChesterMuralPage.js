import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Chester Mural</h1>
        <p>This was commissioned as they really liked the style of the Birkenhead mural so I drew up
          Chester attractions in a similar way. This was drawn in Illustrator.</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
