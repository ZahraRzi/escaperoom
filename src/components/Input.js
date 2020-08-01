import React from "react";
import "../css/input.css";
import "../css/icon.css"
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
Input.defaultProps = {
  className : '',
}
export default function Input(props) {
  const {
    className,
    hasBorder,
    children,
    type,
    id,
    name,
    placeHolder,
    iconName,
  } = props;
  let inputClassName = `${className} d-flex align-items-center`;
  inputClassName += ` justify-content-${iconName ? "between" : "center"}`;
  return (
    <div className={inputClassName}>
      <input type={type} id={id} placeHolder={placeHolder} name={name} className='input' />
      <div className="position-absolute icon-pos">
      <FontAwesomeIcon icon={Icons[`fa${iconName}`]} />
      </div>
    </div>
  );
}
