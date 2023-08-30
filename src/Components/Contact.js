import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#87ceeb" }}>
        <Row>
          <Col>
            <div className="homeGetStarted"></div>
          </Col>
          <Col style={{ backgroundColor: "#87CEEB" }}>
            <img src="../images/contact-us.jpg" height="670px" width="670px" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
