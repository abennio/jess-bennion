import lady from "../../../portfolio-images/IntroVideos/lady.png";
import "./Intro.css"

function Intro() {
  return (
    <div className="intro">
      <img src={lady} className="intro-lady" alt="A cartoon illustration of a black lady with glasses" />
      <div className="text-overlay">
        <div className="text">
        <h1>Introduction Animations</h1>
        <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
