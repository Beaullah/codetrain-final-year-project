import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  const Navbarr = {
    backgroundColor: "#FFD700",
    height: "110px",
  };
  return (
    <div>
      <Navbar style={Navbarr} bg="#FFD700" expand="lg">
        <Navbar.Brand href="#" style={{ color: "gray", marginLeft: "20px" }}>
          PocketPay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link to="/">Home</Nav.Link>

            <Nav.Link to="/about">About</Nav.Link> */}
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
            <Link className="link" to="/features">
              Features
            </Link>
            <Link className="link" to="/download">
              Download
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
