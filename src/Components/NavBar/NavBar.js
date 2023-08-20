import React from "react";
import img from "../../Assets/logo (1).png";
import classes from "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
const NavBar = () => {
  const [sticky, setSticky] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <nav
      className={
        sticky ? `${classes.navbar} ${classes.sticky}` : `${classes.navbar}`
      }
    >
      <ul>
        <li>
          <img src={img} alt="logo" className={classes.logo} />
        </li>
        <Navigation />
        <MobileNavigation />
      </ul>
    </nav>
  );
};

export default NavBar;
