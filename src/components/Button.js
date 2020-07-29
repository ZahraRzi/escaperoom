import React from "react";
import "../css/sug-button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

Button.defaultProps = {
  className: "",
};

var zahraPhone = {
  keys: ["power", "volumeUp", "volumDown"],
  touchKeys: ["back", "home", "taskManager"],
  display: "5inch",
  camera: {
    front: "2mp",
    back: "8mp",
  },
  software: {
    name: "android",
    version: "4.4",
    hasUpdate: false,
    zadan: "zadan"
  },
};

var touchKeys = false;
var property = "software";
var innerProperty = "zadan";

var a = zahraPhone[property][innerProperty];
console.log(a)

export default function Button(props) {
  const { children, className, reverse, iconName } = props;

  let buttonClassName = `${className} my-button d-flex px-2 align-items-center`;
  if (reverse) {
    buttonClassName += " flex-row-reverse";
  }
  buttonClassName += ` justify-content-${iconName ? "between" : "center"}`;

  return (
    <button className={buttonClassName}>
      {children}
      <FontAwesomeIcon icon={Icons[`fa${iconName}`]} />
    </button>
  );
}
