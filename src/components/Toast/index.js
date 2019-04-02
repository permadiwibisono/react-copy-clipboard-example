import React from "react";
import classNames from "classnames";
import "./style.css";

const Toast = props => (
  <div id={props.id} className={classNames("toast", { show: props.show })}>
    {props.children}
  </div>
);

export default Toast;
