import pigeon from "../../../portfolio-images/Birkenhead/Birkenhead-Mural.png";
import "./Birkenhead.css";

function Birkenhead() {
  return (
    <div className="birkenhead">
      <img src={pigeon} className="birkenhead-pigeon" alt="Birkenhead Mural" />
      <div className="text-overlay">
        <div className="text">
          <h1>Birkenhead Mural</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}

export default Birkenhead;
