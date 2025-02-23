import React from "react";
import "./Root.css";
import NavBar from "../Components/Navbar/navbar.js";
import Footer from "../Components/Footer/footer";
import { Outlet, Link } from "react-router-dom";
import Tile from "./Tiles/Tile.js";

// Importing images
import pigeon from "../portfolio-images/Birkenhead/Birkenhead-Mural.png";
import rebrand from "../portfolio-images/UoCRebrand/UoC-rebrand-tile.png";
import christmas from "../portfolio-images/UoCChristmas/UoC-Christmas-Card.png";
import radio from "../portfolio-images/Radio/radio-logo-tile.png";
import zoo from "../portfolio-images/ChesterZoo/Chester-Zoo.png";
import shoutOut from "../portfolio-images/StudentShoutOut/student-shout-out-tile.png";
import cup from "../portfolio-images/KeepCup/Keep-Cup.png";
import student from "../portfolio-images/Emails/student-shoutout-tile.png";
import lady from "../portfolio-images/IntroVideos/lady.png";
import studentNews from "../portfolio-images/StudentNews/student-news-tile.png";
import phone from "../portfolio-images/CWAC/CWAC.png";
import icons from "../portfolio-images/Icons/icons-portfolio-tile.png";
import women from "../portfolio-images/WomenInTech/women-in-tech.png";
import grosvenor from "../portfolio-images/UoCTimeline/Grosvenor-mural.png";
import clearing from "../portfolio-images/Clearing/clearing-tile.png";
import building from "../portfolio-images/ChesterMural/Chester-Mural.png";


export default function Root() {
  return (
    <>
      <div className="root">
        <NavBar />
        <div className="page-container">
          <div className="link-image">
            <Link to="/birkenhead">
                <Tile
                image={pigeon}
                alt={"Birkenhead Mural"}
                title={"Birkenhead Mural"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/uoc-rebrand">
            <Tile
                image={rebrand}
                alt={"A shield with thick black lines"}
                title={"University of Chester Rebrand"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/uoc-christmas">
            <Tile
                image={christmas}
                alt={"An illustration of two semi-detached houses with Christmas decorations and snow"}
                title={"Christmas Card"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/radio">
            <Tile
                image={radio}
                alt={"Chester Student Radio logo"}
                title={"Student Radio"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/chester-zoo">
            <Tile
                image={zoo}
                alt={"Chester Zoo"}
                title={"Chester Zoo"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/student-shout-out">
            <Tile
                image={shoutOut}
                alt={"The words 'Student Shout Out' on their own separate line in white writing with a black block behind each word."}
                title={"Student Shout Out"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/keep-cup">
            <Tile
                image={cup}
                alt={"Illustration of the Binks building at University of Chester"}
                title={"Keep Cup"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/emails">
            <Tile
                image={student}
                alt={"Logo of a megaphone and the words Student Shout Out in a speech bubble"}
                title={"Emails"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/intro">
            <Tile
                image={lady}
                alt={"A cartoon illustration of a smiling black lady with glasses"}
                title={"Introduction Animations"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/student-news">
            <Tile
                image={studentNews}
                alt={"Student News: The University of Chester Student Magazine"}
                title={"Student News"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/cwac">
            <Tile
                image={phone}
                alt={"Phone with a text message conversation on the screen"}
                title={"Cheshire West and Chester Council"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/icons">
            <Tile
                image={icons}
                alt={"A display of icons including a compass, lightbulb and sandwich"}
                title={"Icons"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/women-in-tech">
            <Tile
                image={women}
                alt={"Women in Tech"}
                title={"Women in Tech"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/uoc-timeline">
            <Tile
                image={grosvenor}
                alt={"Chester Building Illustration"}
                title={"Grosvenor Mural"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/clearing">
            <Tile
                image={clearing}
                alt={"Two girls, one looking up and the other looking down with overlayed text that says 'Get World Ready'."}
                title={"Clearing Campaign"}
                />
            </Link>
          </div>
          <div className="link-image">
            <Link to="/chester-mural">
            <Tile
                image={building}
                alt={"Chester Mural"}
                title={"Chester Mural"}
                />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      
      <Outlet />
    </>
  );
}
