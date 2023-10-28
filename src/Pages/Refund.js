import React from "react";
import Card from "../UI/Card";
import classes from "./Refund.module.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Refund = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Card>
        <h2 className={classes.title}>Refund And Cancellation Policy:</h2>
        <div className={classes.refundcontent}>
          <p>
            Thank you for your interest in donating to Tezas Foundation! Our
            goal is to support the communities that need it most. We want to do
            this by providing financial support and education so that people can
            improve their lives.
          </p>
          <p>
            We believe that everyone deserves a chance to succeed—and we want to
            be a part of making sure everyone has that chance. That's why we
            work hard each day to provide the best possible opportunities for
            our donors, who are helping us create a better world for all of us.
          </p>
          <h4 className={classes.bold}>
            To make sure that your donation goes where it's needed most, we've
            put together some guidelines:
          </h4>
          <p>
            No refund/cancellation for the donated amount by any donor will not
            be entertained. The online donations through the online payment
            gateway are final and must be honored. No cash or refund of money
            will be allowed.
          </p>
          <p>
            If any in-kind support is received by the donor from any place
            material will reach the poorest of the poorer communities. Once
            received the donation for a cause will not be refunded to the donor.
            No cancellation is to be made. The donation will be used for
            community development, children's education or women’s empowerment.
          </p>
        </div>
      </Card>
      <Footer />f
    </React.Fragment>
  );
};

export default Refund;
