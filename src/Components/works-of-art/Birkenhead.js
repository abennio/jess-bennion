import pigeon from "../../portfolio-images/Birkenhead-Mural.png";
import "./Birkenhead.css";

function Birkenhead() {
  return (
    <div className="birkenhead">
      <img src={pigeon} className="birkenhead-pigeon" alt="Birkenhead Mural" />
      <div className="text-overlay">
        <h1>Birkenhead Mural</h1>
      </div>
    </div>
  );
}

export default Birkenhead;
