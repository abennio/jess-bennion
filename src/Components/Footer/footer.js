import React from "react";
import instagram from "./Instagram Logo Pack/03 Black Glyph/Instagram_Glyph_Black.svg";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const RETURNING_FROM_PROJECT_STORAGE_KEY =
  "jess-bennion-returning-from-project";
const PROJECT_RETURN_PENDING_CLASS = "project-return-pending";

function clearPendingProjectReturn() {
  try {
    window.sessionStorage.removeItem(RETURNING_FROM_PROJECT_STORAGE_KEY);
    document.documentElement.classList.remove(PROJECT_RETURN_PENDING_CLASS);
  } catch {
    // Ignore storage failures; navigation should still work normally.
  }
}

function Footer() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/jess-bennion"
              reloadDocument
              onClick={clearPendingProjectReturn}
              className="work"
              // activeClassName="active-work"
            >
              Jess Bennion
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink to="https://www.instagram.com/jessb.draws?igsh=MTdleWZ1cGliZmw5OQ==">
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
