import clsx from "clsx";
import classes from "./Text.module.scss";
import React from "react";

const Text = ({ children, className }) => {
  return <p className={clsx(classes.text, className)}>{children}</p>;
};

export default Text;
