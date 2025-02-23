import React from "react";
import "./Tile.css";

export default function Tile(prop) {
  return (
    <div className="tile">
      <img src={prop.image} className="birkenhead-pigeon" alt={prop.alt} />
      <div className="text-overlay">
        <div className="text">
          <h1>{prop.title}</h1>
          <p>- view -</p>
        </div>
      </div>
    </div>
  );
}
