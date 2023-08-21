import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../images/pocketpayHome.png";
import About from "./About";
const Home = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#FFD700", color: "#FFA500" }}>
        <Row>
          <Col className="homeGetStarted">
            <h1>Get your financies off your mind</h1>
            <p>
              Automate your financial plan with set-and-forget money tools that
              fit right into your daily life.
            </p>
            <button>Get Started</button>
          </Col>
          <Col>
            <img src={img1} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
