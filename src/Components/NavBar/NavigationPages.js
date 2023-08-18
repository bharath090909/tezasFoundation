import React from "react";
import classes from "./NavigationPages.module.css";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button";
import { motion } from "framer-motion";

const NavigationPages = (props) => {
  const clickHandler = () => {
    if (props.isMobile) {
      props.closeMobileMenu();
    }
  };

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <li>
      <ul className={classes.links}>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={clickHandler}
        >
          <NavLink className={classes.navlinks} to="/">
            Home
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={clickHandler}
        >
          <NavLink className={classes.navlinks} to="/about">
            About
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={clickHandler}
        >
          <NavLink className={classes.navlinks} to="/services">
            Services
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={clickHandler}
        >
          <NavLink className={classes.navlinks} to="/gallary">
            Gallery
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          onClick={clickHandler}
        >
          <NavLink className={classes.navlinks} to="/contact">
            <Button value="contact">Contact</Button>
          </NavLink>
        </motion.li>
      </ul>
    </li>
  );
};

export default NavigationPages;
