import React from "react";
import classes from "./Footer.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer1}>
        <div className={classes.content1}>
          <h2>About Tezas Foundation</h2>
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
        </div>
        <div className={classes.content2}>
          <h3>Get in touch with us</h3>

          <p>
            <FaLocationDot className={classes.icons} />
            TEZAS FOUNDATION FOR DISABLED H.NO: 1-10-128/1 – BILLA VISHNAVI
            RESIDENCY, 2 ND FLOOR OPPOSITE: - ADITYA PHARMACY, (ST.DUKES HIGH
            SCHOOL) NEAR TO SAIRAM THEATRE, NEW MIRZALGUDA MALKAJGIRI,
            HYDERABAD-500016, TELANGANA INDIA.
          </p>
          <p>
            <FaPhone className={classes.icons} /> 9441033802 /9110547968
          </p>
          <p>
            <FaMessage className={classes.icons} /> tezasfoundation@gmail.com
          </p>
        </div>
      </div>
      <div className={classes.copyrights}>
        <div className={classes.line}></div>
        <ul className={classes.copyrightslinks}>
          <li>
            <NavLink className={classes.link} to="/privacyandpolicies">
              Privacy Policies
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="/termsandconditions">
              Terms and Conditions
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} to="/refund">
              Refund and cancellation policies
            </NavLink>
          </li>
        </ul>
        <div className={classes.socialinks}>
          <p>Copyright &copy; 2023, Tezas Foundation, All rights reserved</p>
          <nav>
            <a href="https://www.facebook.com/tezasfoundation/">
              <FaFacebookSquare />
            </a>
            <a href="https://www.google.com/">
              <FaInstagramSquare />
            </a>
            <a href="https://www.google.com/">
              <FaTwitterSquare />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
