import women from "../../../portfolio-images/WomenInTech/women-in-tech.png";
import "./WomenInTech.css"

function WomenInTech() {
  return (
    <div className="women-in-tech">
      <img src={women} className="wit" alt="Women in Tech" />
      <div className="text-overlay">
        <div className="text">
        <h1>Women in Tech</h1>
        <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default WomenInTech;
