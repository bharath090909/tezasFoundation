import Card from "../UI/Card";
import React from "react";
import classes from "./About.module.css";
import AboutContent from "../Components/About/AboutContent";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const About = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <h1 className={classes.heading}>About Us</h1>
      <Card>
        <AboutContent data={props.data} />
      </Card>
      <Footer />
    </React.Fragment>
  );
};

export default About;
