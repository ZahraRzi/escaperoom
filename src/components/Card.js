import React from "react";
import Button from "./Button";
import { Container, Row, Col } from "reactstrap";
import "../css/main.css";
import Header from "./Header";
import Input from "./Input";

Card.defaultProps = {
  className: "",
};

export default function Card(props) {
  const {
    className,
    color,
    backGroundColor,
    hasShadow,
    hasBorder,
    hasRadius,
    borderColor,
  } = props;
  let CardClassName = `${className}`;
  if (color) {
    CardClassName += `text-${color}`;
  }
  if (backGroundColor) {
    CardClassName += ` bg-${backGroundColor}`;
  }
  if (hasBorder) {
    CardClassName += ` border`;
  }
  if (borderColor) {
    CardClassName += ` border-${borderColor}`;
  }
  if (hasShadow) {
    CardClassName += ` shadow p-3 my-5 rounded`;
  }
  if (hasRadius) {
    CardClassName += ` rounded`;
  }
  return (
    <Container>
      <Row>
        <Col lg={3} sm={0}></Col>
        <Col lg={6} sm={12}>
          <div className={CardClassName}>
            <Header backGroundColor="info" children="Header" />
            <div>
              <h3>Hello</h3>
              <p>This is a Card component!</p>
            </div>
            <form className="d-flex align-items-center justify-content-around border">
              <Input
                type="text"
                id="cardInput"
                placeHolder="type something"
                name="cardInput"
                className="w-50"
                iconName="Search"
                hasBorder
              />
              <Button children="Submit" />
            </form>
          </div>
        </Col>
        <Col lg={3} sm={0}></Col>
      </Row>
    </Container>
  );
}
