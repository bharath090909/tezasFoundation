import React from "react";
import NavigationPages from "./NavigationPages";
import classes from "./MobileNavigation.module.css";
import { CgMenuRound } from "react-icons/cg";
import { SlClose } from "react-icons/sl";

const MobileNavigation = () => {
  const [open, setOpen] = React.useState(false);
  const openHandler = () => {
    setOpen((prevValue) => !prevValue);
  };
  const hamburgerIcon = (
    <CgMenuRound
      className={classes.icon}
      size="40px"
      color="red"
      onClick={openHandler}
    />
  );

  const closeIcon = (
    <SlClose
      className={classes.icon}
      size="40px"
      color="red"
      onClick={openHandler}
      style={{ position: "fixed", top: "20" }}
    />
  );

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className={classes.mobilenavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavigationPages isMobile={true} closeMobileMenu={closeMenu} />}
    </nav>
  );
};

export default MobileNavigation;
