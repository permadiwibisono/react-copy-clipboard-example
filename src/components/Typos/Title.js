import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";

const Title = props => (
  <h1 className={classNames("title", props.className)}>{props.children}</h1>
);

export default Title;

Title.defaultProps = {};

Title.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};
