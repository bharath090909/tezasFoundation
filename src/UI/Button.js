import React from "react";
import classes from "./Button.module.css";
import { motion } from "framer-motion";

const Button = (props) => {
  const classes1 = `${props.className} ${classes.button}`;
  return (
    <motion.button
      whileHover={{
        color: "#fff",
        backgroundColor: "#ed1b24",
        y: -10,
        cursor: "pointer",
      }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
      className={classes1}
      value={props.value}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
