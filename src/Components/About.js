import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <img
              src="./images/meetTheTeam.png"
              style={{ height: "700px", weigth: "700px" }}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
