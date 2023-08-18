import React from "react";
import classes from "./Card.module.css";
import { motion } from "framer-motion";

const Card = (props) => {
  const classesI = `${classes.card} ${props.className}`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className={classesI}
    >
      {props.children}
    </motion.div>
  );
};

export default Card;
