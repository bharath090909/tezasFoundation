import React from "react";
import classes from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Tezas Foundation</h1>
      <h2>Supporting for Blind and other People</h2>
      <p>
        Providing employment opportunites to Hundreds who are Visually impaired.
      </p>
    </header>
  );
};

export default HomeHeader;
