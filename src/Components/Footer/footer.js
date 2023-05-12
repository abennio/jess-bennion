import React from "react";
import instagram from "./Instagram Logo Pack/03 Black Glyph/Instagram_Glyph_Black.svg";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/"
              className="work"
              activeClassName="active-work"
              exact
            >
              Jess Bennion
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink to="/" exact>
                <img
                  src={instagram}
                  className="instagram"
                  alt="Instagram logo"
                />
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
