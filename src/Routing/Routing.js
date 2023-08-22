import React from "react";

import ScrollToTop from "../UI/ScrollToTop";

import AnimatedRoutes from "./AnimatedRoutes";

const Routing = (props) => {
  return (
    <ScrollToTop>
      <AnimatedRoutes
        gallaryData={props.gallaryData}
        aboutData={props.aboutData}
        servicesContent={props.servicesContent}
      />
    </ScrollToTop>
  );
};

export default Routing;
