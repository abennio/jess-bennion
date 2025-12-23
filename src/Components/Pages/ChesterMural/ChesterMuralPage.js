import React from "react";
import chesterMural from "../../../portfolio-images/ChesterMural/Queen's-Park-Mural.png";
import bridgeStreet from "../../../portfolio-images/ChesterMural/chester-mural-website-01.png";
import storyhouse from "../../../portfolio-images/ChesterMural/chester-mural-website-02.png";
import chesterCross from "../../../portfolio-images/ChesterMural/chester-mural-website-03.png";
import townHall from "../../../portfolio-images/ChesterMural/chester-mural-website-04.png";
import ladyDiana from "../../../portfolio-images/ChesterMural/chester-mural-website-06.png";
import cathedral from "../../../portfolio-images/ChesterMural/chester-mural-website-07.png";
import queensParkBridge from "../../../portfolio-images/ChesterMural/chester-mural-website-08.png";
import eastgateClock from "../../../portfolio-images/ChesterMural/chester-mural-website-09.png";
import "./ChesterMuralPage.css";


function ChesterMuralPage() {
  return (
    <div className="chester-mural-page">
      <div className="chester-mural-container">
        <div className="chester-mural-description">
          <h1>Chester Mural</h1>
          <br></br>
          <p>
            This was commissioned as they really liked the style of the Birkenhead
            mural so I drew up Chester attractions in a similar way. This was
            drawn in Illustrator.
          </p>
        </div>
        <div>
          <img src={chesterMural} className="chester-mural-main-image" alt="Chester Mural" />
        </div>
        <div className="chester-mural-images">
          <img src={bridgeStreet} className="bridgeStreet" alt="Chester Mural" />
          <img src={storyhouse} className="storyhouse" alt="Chester Mural" />
          <img src={chesterCross} className="chesterCross" alt="Chester Mural" />
          <img src={townHall} className="townHall" alt="Chester Mural" />
          <img src={ladyDiana} className="ladyDiana" alt="Chester Mural" />
          <img src={cathedral} className="cathedral" alt="Chester Mural" />
          <img src={queensParkBridge} className="queensParkBridge" alt="Chester Mural" />
          <img src={eastgateClock} className="eastgateClock" alt="Chester Mural" />
        </div>
      </div>
    </div>
  );
}

export default ChesterMuralPage;
