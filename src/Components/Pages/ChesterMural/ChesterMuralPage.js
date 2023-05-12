import React from "react";
import mural from "../../../portfolio-images/ChesterMural/Queen's-Park-Mural.png";
import image1 from "../../../portfolio-images/ChesterMural/chester-mural-website-01.png";
import image2 from "../../../portfolio-images/ChesterMural/chester-mural-website-02.png";
import image3 from "../../../portfolio-images/ChesterMural/chester-mural-website-03.png";
import image4 from "../../../portfolio-images/ChesterMural/chester-mural-website-04.png";
import image5 from "../../../portfolio-images/ChesterMural/chester-mural-website-05.png";
import image6 from "../../../portfolio-images/ChesterMural/chester-mural-website-06.png";
import image7 from "../../../portfolio-images/ChesterMural/chester-mural-website-07.png";
import image8 from "../../../portfolio-images/ChesterMural/chester-mural-website-08.png";
import image9 from "../../../portfolio-images/ChesterMural/chester-mural-website-09.png";
import "./ChesterMuralPage.css";

function ChesterMuralPage() {
  return (
    <div className="chester-mural-page">
      <div>
        <h1>Chester Mural</h1>
        <p>
          This was commissioned as they really liked the style of the Birkenhead
          mural so I drew up Chester attractions in a similar way. This was
          drawn in Illustrator.
        </p>
      </div>
      <div>
        <img src={mural} className="chester-mural" alt="Chester Mural" />
        <img src={image1} className="image1-mural" alt="Chester Mural" />
        <img src={image2} className="image2-mural" alt="Chester Mural" />
        <img src={image3} className="image3-mural" alt="Chester Mural" />
        <img src={image4} className="image4-mural" alt="Chester Mural" />
        <img src={image5} className="image5-mural" alt="Chester Mural" />
        <img src={image6} className="image6-mural" alt="Chester Mural" />
        <img src={image7} className="image7-mural" alt="Chester Mural" />
        <img src={image8} className="image8-mural" alt="Chester Mural" />
        <img src={image9} className="image9-mural" alt="Chester Mural" />
      </div>
    </div>
  );
}

export default ChesterMuralPage;
