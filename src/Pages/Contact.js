import React from "react";
import Card from "../UI/Card";
import ContactContent from "../Components/Contact/ContactContent";
import NavBar from "../Components/NavBar/NavBar";

const Contact = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Card>
        <ContactContent />
      </Card>
    </React.Fragment>
  );
};

export default Contact;
