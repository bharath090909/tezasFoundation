import React from "react";
import classes from "./GallaryHomeContent.module.css";
import Card from "../../UI/Card";
import GallaryContent from "../Gallary/GallaryContent";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button";

const GallaryHomeContent = (props) => {
  const filteredArray = props.data.slice(0, 3);
  return (
    <Card>
      <div className={classes.gallaryhomecontent}>
        <h2>Our Gallery</h2>
        <div className={classes.line}></div>
        <p>
          We are providing good facilities for such as individuals to give
          special training in Communication skills, computers, Personality
          development, showing different gadgets and tools etc.
        </p>
        <GallaryContent data={filteredArray} />
        <NavLink to="/gallary">
          <Button>More Photos</Button>
        </NavLink>
      </div>
    </Card>
  );
};

export default GallaryHomeContent;
