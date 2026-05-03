import React from "react";
import logo from "../../logo.png";
import "./navbar.css";
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

function NavBar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/jess-bennion"
              reloadDocument
              onClick={clearPendingProjectReturn}
              className={({ isActive }) =>
                isActive ? "active-work" : "inactive-work"
              }
            >
              WORK
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-contact" : "inactive-contact"
              }
            >
              CONTACT
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink
                to="/jess-bennion"
                reloadDocument
                onClick={clearPendingProjectReturn}
              >
                <img src={logo} className="logo" alt="logo" />
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
