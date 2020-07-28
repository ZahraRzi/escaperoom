import React from "react";
import "../css/sug-button.css";
import { fa } from '@fortawesome/free-solid-svg-icons'
import { FaRedRiver } from "react-icons/fa";


Button.defaultProps = {
  iconName: "coffee",
  className: "",
};

export default function Button(props) {
  const { children, iconName, className } = props;

  return (
    <button className={`${className} my-button`}>
      {children}
      <FaRedRiver />
    </button>
  );
}
