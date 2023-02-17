import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <>
      <div className="birkenhead-page">
        <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
        <div>
          <h1>Chester Zoo</h1>
          <p>Chester Zoo were opening a new enclosure for their lions and needed a brand for this.
            I decided to play on the word ‘mane’ and say ‘Welcome to the mane attraction’, I also drew the animals in
            illustrator and came up with designs for a facebook ad, web banner for their website and a Snapchat Geofilter.</p>
        </div>
      </div>
      <div>
        <p>Website Banner</p>
        <p>Facebook Ad</p>
        <p>Snapchat Geofilter</p>
      </div>
    </>
  );
}

export default BirkenheadPage;
