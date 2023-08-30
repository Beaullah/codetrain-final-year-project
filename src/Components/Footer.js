import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col>
            <h3>Pocketpay</h3>
          </Col>
          <Col>
            <p>&copy; Pocketpay. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
