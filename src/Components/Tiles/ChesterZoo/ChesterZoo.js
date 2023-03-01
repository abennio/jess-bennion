import zoo from "../../../portfolio-images/ChesterZoo/Chester-Zoo.png";
import "./ChesterZoo.css"

function ChesterZoo() {
  return (
    <div className="chester-zoo">
      <img src={zoo} className="chester-zoo-logo" alt="Chester Zoo Logo" />
      <div className="text-overlay">
        <div className="text">
        <h1>Chester Zoo</h1>
        <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default ChesterZoo;
