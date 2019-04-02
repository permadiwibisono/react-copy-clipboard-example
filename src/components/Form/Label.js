import React from "react";
import classNames from "classnames";
const Label = props => (
  <label className={classNames("label", props.className)}>
    {props.children}
  </label>
);

export default Label;
