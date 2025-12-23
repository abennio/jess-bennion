import React from "react";


function NoMatch() {
  return (
    <div className="noMatch">
      <div className="description">
        <h1>Argh, 404!</h1>
        <p>
          It looks like you've stumbled across a non-existent page! Just press
          the back button and youll be right as rain.
        </p>
      </div>
    </div>
  );
}

export default NoMatch;
