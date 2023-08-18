import React from "react";
import Card from "../UI/Card";
import classes from "./Services.module.css";
import ServicesContent from "../Components/Services/ServicesContent";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Services = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <h1 className={classes.header}>Services</h1>
      <Card>
        <ServicesContent data={props.data} />
      </Card>
      <Footer />
    </React.Fragment>
  );
};

export default Services;
