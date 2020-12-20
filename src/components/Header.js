import React from "react";
import { Navbar, Col } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "'Cinzel Decorative', cursive",
            fontSize: "30px",
          }}
        >
          Ticket To Ride
        </Navbar.Brand>
        <Navbar.Brand
          href="#home"
          style={{ fontFamily: "'Nova Cut', cursive" }}
        >
          Europe
        </Navbar.Brand>
        <Col md={{ span: 1, offset: 9 }}></Col>
      </Navbar>
    </div>
  );
}
