import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";

const Container = props => (
  <div className={classNames("container", props.className)}>
    {props.children}
  </div>
);

export default Container;

Container.defaultProps = {};

Container.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};
