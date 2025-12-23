import React from "react";
import PropTypes from "prop-types";
import "./Tile.css";

function Tile(prop) {
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

Tile.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(Tile);
