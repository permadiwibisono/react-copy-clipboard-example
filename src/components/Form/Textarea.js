import React from "react";
import classNames from "classnames";

const Textarea = ({ className, ...props }) => (
  <textarea className={classNames("textarea", props.className)} {...props} />
);

export default Textarea;
