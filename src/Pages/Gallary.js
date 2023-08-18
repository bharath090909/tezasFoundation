import React from "react";
import Card from "../UI/Card";
import GallaryContent from "../Components/Gallary/GallaryContent";
import classes from "./Gallary.module.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Gallary = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <h1 className={classes.title}>Gallery</h1>
      <Card>
        <GallaryContent data={props.data} />
      </Card>
      <Footer />
    </React.Fragment>
  );
};

export default Gallary;
