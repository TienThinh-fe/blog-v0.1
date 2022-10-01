import clsx from "clsx";
import React from "react";
import classes from "./Heading.module.scss";

const Heading = ({ level = 1, children, className }) => {
  if (level === 1) {
    return <h1 className={clsx(className, classes.heading)}>{children}</h1>;
  } else if (level === 2) {
    return (
      <h2 className={clsx(className, classes.heading, classes.h2heading)}>
        {children}
      </h2>
    );
  } else if (level === 3) {
    return (
      <h3 className={clsx(className, classes.heading, classes.h3heading)}>
        {children}
      </h3>
    );
  }
};

export default Heading;
