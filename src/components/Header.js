import React from "react";
import { Navbar, Col } from "react-bootstrap";
import ResetButton from "./ResetButton";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Ticket To Ride</Navbar.Brand>
        <Navbar.Brand href="#home">Europe</Navbar.Brand>
        <Col md={{ span: 1, offset: 9 }}>
          <ResetButton />
        </Col>
      </Navbar>
    </div>
  );
}
