import React from "react";
import { Link } from "react-router-dom";

const Button = ({ content, className, to }) => {
  let Component = "button";
  if (to) Component = Link;
  return (
    <Component
      to={to}
      type="button"
      className={`${className} outline-none rounded-md flex items-center justify-center group`}
    >
      {content}
    </Component>
  );
};

export default Button;
