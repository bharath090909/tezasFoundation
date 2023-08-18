import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import img from "../../Assets/blindpeople.jpg";
import classes from "./ParallaxImage.module.css";

const ParallaxImage = () => {
  return (
    <React.Fragment>
      <ParallaxBanner
        layers={[{ image: img, speed: -30 }]}
        style={{ height: "50vh" }}
        className={classes.parllel}
      >
        <div className={classes.quote}>
          <p>'Spreading helping hands with direct involment of society'</p>
        </div>
      </ParallaxBanner>
    </React.Fragment>
  );
};

export default ParallaxImage;
