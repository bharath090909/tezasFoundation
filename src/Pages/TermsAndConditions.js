import React from "react";
import Card from "../UI/Card";
import classes from "./TermsAndCondition.module.css";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const TermsAndConditions = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Card>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <h2 className={classes.title}>Terms And Conditions</h2>
          <div className={classes.termscontent}>
            <p>
              We provide the information on this website (“website”) to visitors
              who are visiting our site (“you”) subject to the terms and
              conditions set out in these website terms and conditions, the
              privacy policy and any other relevant terms and conditions,
              policies and notices which may be applicable to a specific section
              or module of this website
            </p>
            <p>
              Welcome to our website. Please read our Terms and Conditions of
              Use, which together with our Privacy Policy govern Tezas
              Foundation for Disabled’s relationship with you in relation to
              this website.
            </p>
            <p>
              The term ‘Tezas Foundation for Disabled‘ or ‘us’ or ‘we’ refers to
              the owner of the website whose registered office is under Indian
              Trusts Act, 1882, having registered office and head office at
              <span className={classes.bold}>
                {" "}
                H.NO: 1-10-128/1 – BILLA VISHNAVI RESIDENCY, 2 ND FLOOR
                ,OPPOSITE: - ADITYA PHARMACY, (ST.DUKES HIGH SCHOOL), NEAR TO
                SAIRAM THEATRE, NEW MIRZALGUDA, MALKAJGIRI , HYDERABAD – 500016,
                Telangana, India.
              </span>{" "}
              Our company registration number is 1512-IV/87/2014. The term ‘you’
              refers to the user or viewer of our website.
            </p>
            <h3>The following terms of use govern the use of this website:</h3>
            <ul>
              <li>
                The information and services on this website are for your
                general information and use only. They are subject to change
                without notice.
              </li>
              <li>
                This website contains copyrighted material owned by or licensed
                to us. This includes, but is not limited to: the design, layout
                and appearance of this site (including its logo), text, graphics
                and other content featured on this site. Reproduction is
                prohibited except pursuant to the terms of this copyright
                notice.
              </li>
              <li>
                We are not liable for any damage to your computer system or loss
                of data that results from the use of this website. It is your
                responsibility to ensure that any products, services or
                information available through this website meet your specific
                requirements.
              </li>
              <li>
                Causing damage to this website may result in a claim for damages
                and/or be a criminal offense.
              </li>
              <li>
                This website may include links to other websites. These links
                are provided for your convenience, but we have no control over
                the content of the linked site(s).
              </li>
              <li>
                You may not create a link to this website from another website
                or document without prior written consent from Tezas Foundation
                for Disabled.
              </li>
            </ul>
          </div>
        </motion.div>
      </Card>
      <Footer />
    </React.Fragment>
  );
};

export default TermsAndConditions;
