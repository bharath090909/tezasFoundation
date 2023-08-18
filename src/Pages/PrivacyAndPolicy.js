import React from "react";
import Card from "../UI/Card";
import classes from "./PrivacyAndPolicy.module.css";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const PrivacyAndPolicy = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Card>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className={classes.privacyandpolicy}
        >
          <h2 className={classes.title}>Privacy and Policies:</h2>
          <div className={classes.privacycontent}>
            <p>
              We value your privacy and we work hard to keep your personal
              information secure. This privacy policy describes how we collect
              and use the personal information you provide us when you visit
              this website. We will not share this information with anyone,
              except in limited circumstances when required by law or needed to
              protect our legal rights.
            </p>
            <h3>Information we may collect from you</h3>
            <p>
              When you create an account, register for an event or engage with
              us in any other way that requires your identification, contact
              information, and financial details/payment transaction
              verification, we use this information to contact you.
            </p>
            <p>
              When participating in our events, you consent to the use of your
              photos, recordings, and video for marketing purposes. Unless
              otherwise notified, we reserve the right to take and use any
              photos or recordings from our events on our website and in our
              marketing materials.
            </p>
            <p>
              Technical and usage data about how you access this website,
              including your IP address, is collected through cookies on your
              computer. This enables us to recognize your computer as you view
              different pages on our website, making it easier for us to give
              you a better website experience. Cookies allow us to store
              preferences so that content and functions are specific to you.
            </p>
            <h3>HOW DO WE USE YOUR INFORMATION?</h3>
            <ul>
              <li>
                Tezas Foundation uses personally identifiable information you
                provide about yourself.
              </li>
              <li>
                To send you invitations for upcoming events that may interest
                you.
              </li>
              <li>To process your donation and send a receipt.</li>
              <li>
                To send you a thank you note for volunteering or donation.
              </li>
              <li>
                To respond to your questions or comments about Tezas foundation.
              </li>
            </ul>
          </div>
        </motion.div>
      </Card>
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyAndPolicy;
