import React from "react";
import classes from "./About.module.css";
import ParallaxHeaderImage from "../Components/Home/ParallaxHeaderImage";
import { motion } from "framer-motion";
import AboutHomeContent from "../Components/Home/AboutHomeContent";
import ParallaxImage from "../Components/Home/ParallaxImage";
import GallaryHomeContent from "../Components/Home/GallaryHomeContent";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Home = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className={classes.home}
      >
        <ParallaxHeaderImage />

        {/* <div className={classes.mainHeader}>
        <Card>
          <div className={classes.header}>
            <HomeHeader />
          </div>
        </Card>
      </div> */}
        <AboutHomeContent />
        <ParallaxImage />
        <GallaryHomeContent data={props.data} />
      </motion.div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
