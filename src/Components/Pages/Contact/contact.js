import React from "react";
import NavBar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className="contact">
      <NavBar />
      <div className="split-page">
        <div className="description">
          <h1>Hello</h1>
          <p>
            My name is Jess, I am from Chester in the UK. I design for print and
            digital, specialising in illustration, motion graphics and digital.
            Please fill in the form for commissions, enquiries or just a general
            chat.
          </p>
        </div>
        <Form>
          <Form.Label>Name</Form.Label>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <br></br>
          <Form.Label>Subject</Form.Label>
          <Row>
            <Form.Control placeholder="Write your subject here" />
          </Row>
          <br></br>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
