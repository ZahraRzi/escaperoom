import React, { useState } from "react";
import Button from "./Button";
import { Container, Row, Col } from "reactstrap";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Row>
        <Col lg="3"></Col>
        <Col lg="6">
          <p>{count}</p>
          <Button onClick={() => setCount(count - 1)} children="decrease" />
          <Button onClick={() => setCount(count + 1)} children="increase" />
        </Col>
        <Col lg="3"></Col>
      </Row>
    </Container>
  );
}
