import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";

const Section = props => (
  <section className={classNames("section", props.className)}>
    {props.children}
  </section>
);

export default Section;

Section.defaultProps = {};

Section.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};
