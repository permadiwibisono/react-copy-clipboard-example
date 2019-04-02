import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";

const SubTitle = props => (
  <h1 className={classNames("subtitle", props.className)}>{props.children}</h1>
);

export default SubTitle;

SubTitle.defaultProps = {};

SubTitle.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};
