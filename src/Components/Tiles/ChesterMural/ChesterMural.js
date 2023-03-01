import building from "../../../portfolio-images/ChesterMural/Chester-Mural.png";
import "./ChesterMural.css"

function ChesterMural() {
  return (
    <div className="chester-mural">
      <img src={building} className="chester-building" alt="Chester Building Illustration" />
      <div className="text-overlay">
        <div className="text">
        <h1>Chester Mural</h1>
        <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default ChesterMural;
