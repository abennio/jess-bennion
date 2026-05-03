import React from "react";
import PropTypes from "prop-types";
import "./Tile.css";

function Tile(prop) {
  return (
    <div className="tile">
      <img src={prop.image} className="tile-image" alt={prop.alt} />
      <div className="text-overlay">
        <div className="text">
          <h2>{prop.title}</h2>
          <span className="tile-link">View project</span>
        </div>
      </div>
    </div>
  );
}

Tile.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(Tile);
