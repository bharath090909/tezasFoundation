import React from "react";
import img from "../../Assets/logo (1).png";
import classes from "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
const NavBar = () => {
  // const ref = React.useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end start", "end end"],
  // });
  // const y = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  // const position = useTransform(
  //   scrollYProgress,
  //   [0, 0.2],
  //   ["relative", "sticky"]
  // );
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
