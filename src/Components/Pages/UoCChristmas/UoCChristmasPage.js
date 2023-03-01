import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>University of Chester E-Card</h1>
        <p>
          The university design an e-card each year and this was the first year
          an animated version was designed. The theme was deck the halls of
          residence, I drew a range of different accommodation in Illustrator
          and then animated it in After Effects.
        </p>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rVWMjqYdUYc"
          title="University of Chester Christmas E-Card"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default BirkenheadPage;
