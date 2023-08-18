import React from "react";
import classes from "./ServiceContent.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const ServicesContent = (props) => {
  let counter = 0;
  const rendering = () => {
    if (counter % 2 === 0) {
      counter = counter + 1;
      return classes.correct;
    } else {
      counter = counter + 1;
      return classes.reverse;
    }
  };

  return (
    <React.Fragment>
      {props.data.map((item) => (
        <section
          key={item.id}
          className={`${rendering()} ${classes.servicescontent}`}
        >
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={variants}
            className={classes.hide}
          >
            <motion.h3 className={classes.title}>{item.title}</motion.h3>
            <motion.p>{item.description}</motion.p>
          </motion.div>

          <motion.img
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={variants}
            src={item.src}
            alt={item.alt}
          />
        </section>
      ))}
    </React.Fragment>
  );
};

export default ServicesContent;
