import React from "react";
import blackwhite from "../../../portfolio-images/KeepCup/Keep+Cup+Illustration+bw.png";
import colour from "../../../portfolio-images/KeepCup/Keep+Cup+Illustration+colour.png";
import aiken from "../../../portfolio-images/KeepCup/UoC_Aiken+Hall.png";
import binks from "../../../portfolio-images/KeepCup/UoC_Binks.png";
import binksoutline from "../../../portfolio-images/KeepCup/UoC_Binks+Outline.png";
import broomhead from "../../../portfolio-images/KeepCup/UoC_Broomhead.png";
import broomheadoutline from "../../../portfolio-images/KeepCup/UoC_Broomhead+Outline.png";
import churchill from "../../../portfolio-images/KeepCup/UoC_Churchill+House.png";
import churchilloutline from "../../../portfolio-images/KeepCup/UoC_Churchill+Outline.png";
import csu from "../../../portfolio-images/KeepCup/UoC_CSU.png";
import kingsway from "../../../portfolio-images/KeepCup/UoC_Kingsway.png";
import kingswayoutline from "../../../portfolio-images/KeepCup/UoC_Kingsway+Outline.png";
import marriss from "../../../portfolio-images/KeepCup/UoC_Marriss.png";
import marrissoutline from "../../../portfolio-images/KeepCup/UoC_Marriss+Outline.png";
import molloy from "../../../portfolio-images/KeepCup/UoC_Molloy.png";
import media from "../../../portfolio-images/KeepCup/UoC_NW+Media+Centre.png";
import mediaoutline from "../../../portfolio-images/KeepCup/UoC_NW+Media+Centre+Outline.png";
import porter from "../../../portfolio-images/KeepCup/UoC_Porter's+Lodge.png";
import riverside from "../../../portfolio-images/KeepCup/UoC_Riverside.png";
import riversideoutline from "../../../portfolio-images/KeepCup/UoC_Riverside+Outline.png";
import seaborne from "../../../portfolio-images/KeepCup/UoC_Seaborne.png";
import smallhall from "../../../portfolio-images/KeepCup/UoC_Small+Hall.png";
import thornton from "../../../portfolio-images/KeepCup/UoC_Thornton.png";
import thorntonoutline from "../../../portfolio-images/KeepCup/UoC_Thornton+Outline.png";
import tower from "../../../portfolio-images/KeepCup/UoC_Tower.png";
import toweroutline from "../../../portfolio-images/KeepCup/UoC_Tower+Outline.png";
import "./KeepCupPage.css";

function KeepCupPage() {
  return (
    <div className="birkenhead-page">
      <img
        src={colour}
        className="keep-cup"
        alt="Keep Cup Design that includes coloured illustrations of a number of different buildings"
      />
      <div>
        <img
          src={blackwhite}
          className="keep-cup-bw"
          alt="Keep Cup Design that includes black and white illustrations of a number of different buildings"
        />
        <h1>Keep Cup Design</h1>
        <p>
          The University wanted to hand out free keep cups for freshers in
          University accommodation as an incentive to avoid using coffee cups
          when purchasing coffee on campus. I was asked to design a cup that
          showed off the buildings on each of the campuses.
        </p>
        <img
          src={aiken}
          className="aiken"
          alt="Illustration of Aiken building"
        />
        <img
          src={binks}
          className="binks"
          alt="Illustration of Binks building"
        />
        <img
          src={binksoutline}
          className="binksoutline"
          alt="Black and white illustration of Binks building"
        />
        <img
          src={broomhead}
          className="broomhead"
          alt="Illustration of Broomhead building"
        />
        <img
          src={broomheadoutline}
          className="broomheadoutline"
          alt="Black and white illustration of Broomhead building"
        />
        <img
          src={churchill}
          className="churchill"
          alt="Illustration of Churchill building"
        />
        <img
          src={churchilloutline}
          className="churchilloutline"
          alt="Black and white illustration of Churchill building"
        />
        <img
          src={csu}
          className="csu"
          alt="Illustration of Chester Students' Union building"
        />
        <img
          src={kingsway}
          className="kingsway"
          alt="Illustration of Kingsway building"
        />
        <img
          src={kingswayoutline}
          className="kingswayoutline"
          alt="Black and white illustration of Kingsway building"
        />
        <img
          src={marriss}
          className="marriss"
          alt="Illustration of Marriss building"
        />
        <img
          src={marrissoutline}
          className="marrissoutline"
          alt="Black and white illustration of Marriss building"
        />
        <img
          src={molloy}
          className="molloy"
          alt="Illustration of Molloy building"
        />
        <img
          src={media}
          className="media"
          alt="Illustration of North West Media Centre building"
        />
        <img
          src={mediaoutline}
          className="mediaoutline"
          alt="Black and white illustration of North West Media Centre building"
        />
        <img
          src={porter}
          className="porter"
          alt="Illustration of Porter's Lodge building"
        />
        <img
          src={riverside}
          className="riverside"
          alt="Illustration of Riverside building"
        />
        <img
          src={riversideoutline}
          className="riversideoutline"
          alt="Black and white illustration of Riverside building"
        />
        <img
          src={seaborne}
          className="seaborne"
          alt="Illustration of Aiken building"
        />
        <img
          src={smallhall}
          className="smallhall"
          alt="Illustration of Small Hall building"
        />
        <img
          src={thornton}
          className="thornton"
          alt="Illustration of Thornton building"
        />
        <img
          src={thorntonoutline}
          className="thorntonoutline"
          alt="Black and white illustration of Thornton building"
        />
        <img
          src={tower}
          className="tower"
          alt="Illustration of Tower building"
        />
        <img
          src={toweroutline}
          className="toweroutline"
          alt="Black and white illustration of Tower building"
        />
      </div>
    </div>
  );
}

export default KeepCupPage;
