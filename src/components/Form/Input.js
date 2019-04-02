import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const Input = props => (
  <div className={classNames("control", { "is-loading": props.isLoading })}>
    <input
      id={props.id}
      className={classNames(
        `input is-${props.color} is-${props.size}`,
        props.className,
        {
          "is-rounded": props.rounded
        }
      )}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default Input;

Input.defaultProps = {
  type: "text",
  value: "",
  placeholder: "Input some text...",
  color: "primary",
  isLoading: false,
  rounded: false,
  size: "medium"
};
Input.propTypes = {
  id: propTypes.string,
  className: propTypes.string,
  value: propTypes.string,
  color: propTypes.string,
  type: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  isLoading: propTypes.bool,
  rounded: propTypes.bool,
  size: propTypes.string,
  onChange: propTypes.func
};
