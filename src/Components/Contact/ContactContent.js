import classes from "./ContactContent.module.css";
import image from "../../Assets/240_F_163985053_AmI1FSESWejO1oaUBpLrPxejtofGmtNm.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";
import useInput from "../../hooks/input-validation";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.4 },
  },
};

const ContactContent = () => {
  const {
    value: name,
    inputIsValid: nameIsValid,
    inputHasError: nameIsInvalid,
    inputChangeHandler: nameHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim("") !== "");

  const {
    value: phone,
    inputIsValid: phoneIsValid,
    inputHasError: phoneIsInvalid,
    inputChangeHandler: numberHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetPhone,
  } = useInput((value) => value.length === 10);

  const {
    value: email,
    inputIsValid: emailIsValid,
    inputHasError: emailIsInvalid,
    inputChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: message,
    inputIsValid: messageIsValid,
    inputHasError: messageIsInvalid,
    inputChangeHandler: messageHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput((value) => value.trim("") !== "");

  let formValidity = false;
  if (!nameIsValid && !phoneIsValid && !emailIsValid && !messageIsValid) {
    formValidity = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!nameIsValid && !phoneIsValid && !emailIsValid && !messageIsValid) {
      return;
    }

    //Send the data to database via POST request
    const data = {
      id: Math.random(),
      name: name,
      phone: Number(phone),
      email: email,
      message: message,
    };
    resetName();
    resetPhone();
    resetEmail();
    resetMessage();
  };

  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      variants={variants}
      className={classes.contact}
    >
      <motion.div variants={variants} className={classes.image}>
        <img src={image} alt="Typing"></img>
      </motion.div>
      <motion.div variants={variants} className={classes.form}>
        <h3 className={classes.title}>Contact Us</h3>
        <form onSubmit={submitHandler}>
          {/* <label htmlFor="name">Name</label> */}
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={nameHandler}
            onBlur={nameBlurHandler}
            value={name}
          />
          {nameIsInvalid && <p>Enter a valid name</p>}
          {/* <label htmlFor="phone">Name</label> */}
          <input
            id="phone"
            type="number"
            placeholder="Phone"
            onChange={numberHandler}
            onBlur={numberBlurHandler}
            value={phone}
          />
          {phoneIsInvalid && <p>Enter a valid Phone Number</p>}
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={emailHandler}
            onBlur={emailBlurHandler}
            value={email}
          />
          {emailIsInvalid && <p>Enter a valid Email</p>}

          <textarea
            id="message"
            rows="5"
            placeholder="Message"
            onChange={messageHandler}
            onBlur={messageBlurHandler}
            value={message}
          />
          {messageIsInvalid && <p>Enter a valid Message</p>}
          <button disabled={formValidity} type="submit">
            Submit
          </button>
        </form>
      </motion.div>
      <motion.div variants={variants} className={classes.footer}>
        <div>
          <h5>
            <FaPhone className={classes.icons} /> Call Us
          </h5>
          <p>+91 9022848349/</p>
          <p>+91 9834939849</p>
        </div>
        <div>
          <h5>
            <FaMessage className={classes.icons} />
            Email
          </h5>
          <p> tezsrifoundation@gmail.com</p>
        </div>
        <div>
          <h5>
            <FaLocationDot className={classes.icons} />
            Location
          </h5>
          <p>Tezas Foundation, Malkajgiri, Hyderabad</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactContent;
