import React from "react";
import mural from "../../../portfolio-images/Birkenhead/birkenhead-mural-large.png";
import "./BirkenheadPage.css";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";


function BirkenheadPage() {
  return (
    <div className="birkenhead-page">
      <NavBar />
        <div className="birkenhead-container">
          <div className="birkenhead-description">
            <h1>Birkenhead Mural</h1>
            <br></br>
            <p>
              This was a wall mural designed for Marriss House, a campus dedicated
              to teaching Nursing, based in Birkenhead. The brief asked for a design
              that showcased the attractions in Birkenhead.
            </p>
          </div>
          <img src={mural} className="birkenhead-mural" alt="Birkenhead Mural" />
        </div>
      <Footer />
    </div>
  );
}

export default BirkenheadPage;
