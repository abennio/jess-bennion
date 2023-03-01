import grosvenor from "../../../portfolio-images/UoCTimeline/Grosvenor-mural.png";
import "./UoCTimeline.css"

function UoCTimeline() {
  return (
    <div className="grosvenor-mural">
      <img src={grosvenor} className="whole-grosvenor-mural" alt="Chester Building Illustration" />
      <div className="text-overlay">
        <div className="text">
        <h1>Grosvenor Mural</h1>
        <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default UoCTimeline;
