import React from "react";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
const Features = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#87ceeb" }}>
        <Row>
          <Col>
            <div className="homeGetStarted">
              <h1>Get your financies off your mind</h1>
              <p>
                Automate your financial plan with set-and-forget money tools
                that fit right into your daily life.
              </p>
              <button>Get Started</button>
            </div>
          </Col>
          <Col style={{ backgroundColor: "#87CEEB" }}>
            <img src="../images/pocketpayHome.png" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Features;
