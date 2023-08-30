import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Img2 from "./meetTheTeam.png";

const About = () => {
  return (
    <div>
      <Container fluid>
        <Row className="Aboutpage">
          <Col>
            <img src={Img2} style={{ height: "700px", weigth: "700px" }} />
          </Col>
          <Col>
            <p>
              PocketPay is a revolutionary financial wellness platform designed
              with the needs of Gen Z in mind. Our mission is to empower young
              individuals with the tools and knowledge they need to take control
              of their finances, achieve their goals, and build a secure future.
              With the unique financial challenges faced by Gen Z, such as
              student loan debt and the gig economy, PocketPay steps in to
              provide a comprehensive solution. Our mobile-first app offers a
              range of features, from budgeting and savings to personalized
              investment recommendations, all aimed at helping users make
              informed financial decisions. At PocketPay, we believe that
              financial wellness is not just about numbers; it's about
              empowerment. Our easy-to-use interface, educational content, and
              interactive challenges turn learning about finances into a
              rewarding experience. Join us on this journey to financial freedom
              and secure your tomorrow with PocketPay.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
