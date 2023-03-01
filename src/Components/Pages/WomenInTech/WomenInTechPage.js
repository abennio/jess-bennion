import mural from "../../portfolio-images/Birkenhead-Mural.png";
import "./BirkenheadPage.css";

function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
      <div>
        <h1>Women in Tech</h1>
        <p>I was asked to design a social media post which included motion design. I came up
          with a couple of ideas, one was retro so it worked alongside current trends and the
          other was a more modern take on the idea. The idea was to have an eye catching intro
          so people on Instagram would stop and watch the videos to follow in the carousel.</p>
      </div>
    </div>
  );
}

export default BirkenheadPage;
