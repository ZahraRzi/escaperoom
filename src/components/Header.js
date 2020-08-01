import React from "react";
import "../css/header.css";
Header.defaultProps = {
  className: "",
};

export default function Header(props) {
  const { className, color, backGroundColor, children } = props;
  let headerClassName = `${className} header`;
  if (color) {
    headerClassName = +`text-${color}`;
  }
  if (backGroundColor) {
    headerClassName += ` bg-${backGroundColor}`;
  }
  return <div className={headerClassName}>{children}</div>;
}
