import React from "react";
import img from "../../Assets/4657490366_871d799537_o.jpg";
import classes from "./AboutHomeContent.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { NavLink } from "react-router-dom";

const AboutHomeContent = () => {
  return (
    <Card>
      <section className={classes.abouthomecontent}>
        <div>
          <h2>
            Welcome to <span className={classes.title}>Tezas Foundation</span>
          </h2>
          <p>
            TEZAS FOUNDATION FOR DISABLED, a TRUST established in the year 2014
            and officially got registered under the Indian Trust Act in 1961.
            TEZAS FOUNDATION FOR DISABLED works for the empowerment of children
            with disabilities and underserved children in rural areas across
            India. TEZAS FOUNDATION FOR DISABLED serves people in need by
            providing services including quality education, accommodation, food,
            vocational training, and jobs for qualified disabled persons with
            specialized training.
          </p>

          <NavLink to="/about">
            <Button>Read More </Button>
          </NavLink>
        </div>
        <img src={img} alt="About" />
      </section>
    </Card>
  );
};

export default AboutHomeContent;
