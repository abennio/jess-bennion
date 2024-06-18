import React from "react";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function NoMatch() {
  return (
    <div className="noMatch">
      <NavBar />
      <div className="description">
        <h1>Argh, 404!</h1>
        <p>
          It looks like you've stumbled across a non-existent page! Just press
          the back button and youll be right as rain.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default NoMatch;
