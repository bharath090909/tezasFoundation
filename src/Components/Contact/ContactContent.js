import { useState } from "react";
import classes from "./ContactContent.module.css";
import image from "../../Assets/240_F_163985053_AmI1FSESWejO1oaUBpLrPxejtofGmtNm.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.4 },
  },
};

const ContactContent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const numberHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random(),
      name: name,
      phone: Number(phone),
      email: email,
      message: message,
    };
    setName("");
    setMessage("");
    setPhone("");
    setEmail("");
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
            value={name}
          />
          {/* <label htmlFor="phone">Name</label> */}
          <input
            id="phone"
            type="number"
            placeholder="Phone"
            onChange={numberHandler}
            value={phone}
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={emailHandler}
            value={email}
          />
          {/* <input id="phone" type="textarea" placeholder="Message" /> */}
          <textarea
            id="message"
            rows="5"
            placeholder="Message"
            onChange={messageHandler}
            value={message}
          />
          <button type="submit">Submit</button>
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
