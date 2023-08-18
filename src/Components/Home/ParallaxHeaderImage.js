import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import img from "../../Assets/031221101719-home_image.jpeg";
import classes from "./ParallaxHeaderImage.module.css";
import HomeHeader from "./HomeHeader";
import Card from "../../UI/Card";

const ParallaxHeaderImage = () => {
  return (
    <React.Fragment>
      <ParallaxBanner
        layers={[{ image: img, speed: -5 }]}
        style={{ height: "100vh" }}
        className={classes.parllel}
      >
        <Card>
          <div className={classes.header}>
            <HomeHeader />
          </div>
        </Card>
      </ParallaxBanner>
    </React.Fragment>
  );
};

export default ParallaxHeaderImage;
