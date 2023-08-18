import React from "react";
import NavigationPages from "./NavigationPages";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavigationPages />
    </nav>
  );
};

export default Navigation;
