import logo from "../../logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar() {
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
              WORK
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink
              to="/contact"
              className="contact"
              activeClassName="active-contact"
              exact
            >
              CONTACT
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink to="/" exact>
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
