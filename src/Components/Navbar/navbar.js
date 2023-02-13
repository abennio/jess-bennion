import logo from "../../logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="work">
              WORK
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/contact" className="contact">
              CONTACT
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
