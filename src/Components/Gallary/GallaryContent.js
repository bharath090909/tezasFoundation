import React from "react";
import classes from "./GallaryContent.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const GallaryContent = (props) => {
  const [src, setSrc] = React.useState(" ");
  const [isClicked, setIsClicked] = React.useState(false);
  const addHandler = (e) => {
    setIsClicked(true);
    setSrc(e.target.src);
  };
  const removeHandler = () => {
    setIsClicked(false);
  };
  return (
    <React.Fragment>
      {isClicked ? (
        <div>
          <div onClick={removeHandler} className={classes.backdrop}></div>
          <div onClick={removeHandler} className={classes.image1}>
            <img src={src} alt="img" />
          </div>
          <div className={classes.gallary}>
            {props.data.map((item) => {
              return (
                <div key={item.id} className={classes.image}>
                  <img onClick={addHandler} src={item.src} alt={item.alt} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <motion.div
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={variants}
          className={classes.gallary}
        >
          {props.data.map((item) => {
            return (
              <div key={item.id} className={classes.image}>
                <img onClick={addHandler} src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default GallaryContent;
