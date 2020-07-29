import React from "react";
import "./css/suggestion.css";
import Button from "./components/Button";
import { Container, Row, Col } from "reactstrap";
import { FaRedRiver } from 'react-icons/fa';

export default function Suggestion() {
  return (
    <Container>
      <Row className="mx-auto">
        <Col lg={5} sm={12}>
          <div className="suggestion">
            <img
              src="/img/kaboos.jpg"
              className="img-fluid h-100 d-flex align-items-center"
            />
            <div className="sug-button d-flex align-items-center justify-content-around">
              <Button children="Reserve" className="w-25" reverse iconName="CheckSquare" />
              <Button children="Details" className="w-25" />
            </div>
          </div>
        </Col>

        <Col lg={2} sm={0}></Col>

        <Col lg={5} sm={12}>
          <div className="suggestion">
            <img src="/img/13th-night.jpg" className="img-fluid h-100" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
