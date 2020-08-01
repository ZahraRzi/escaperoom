import React from "react";
import "../css/main.css";

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
    children,
    onClick,
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
    <div className={CardClassName} onClick={onClick}>
      {children}
    </div>
  );
}
