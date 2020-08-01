import React from "react";
import "../css/sug-button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

Button.defaultProps = {
  className: "",
};

export default function Button(props) {
  const { children, className, reverse, iconName, onClick } = props;

  let buttonClassName = `${className} my-button d-flex px-2 align-items-center`;
  if (reverse) {
    buttonClassName += " flex-row-reverse";
  }
  buttonClassName += ` justify-content-${iconName ? "between" : "center"}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
      <FontAwesomeIcon icon={Icons[`fa${iconName}`]} />
    </button>
  );
}
