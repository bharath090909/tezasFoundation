import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Gallary from "../Pages/Gallary";
import { motion, AnimatePresence } from "framer-motion";
import PrivacyAndPolicy from "../Pages/PrivacyAndPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Refund from "../Pages/Refund";

const AnimatedRoutes = (props) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home data={props.gallaryData} />} />
        <Route path="/about" element={<About data={props.aboutData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/services"
          element={<Services data={props.servicesContent} />}
        />
        <Route path="/gallary" element={<Gallary data={props.gallaryData} />} />
        <Route path="/privacyandpolicies" element={<PrivacyAndPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/refund" element={<Refund />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
