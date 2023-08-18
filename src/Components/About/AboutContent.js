import React from "react";
import classes from "./AboutContent.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 1 },
  },
};

const AboutContent = (props) => {
  let counter = 0;
  const rendering = () => {
    if (counter % 2 === 0) {
      counter = counter + 1;
      return classes.correct;
    } else {
      counter = counter + 1;
      return classes.reverse;
    }
  };

  return (
    <React.Fragment>
      <div className={classes.aboutcontent}>
        {props.data.map((item) => (
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={variants}
            key={item.id}
            className={`${rendering()} ${classes.aboutcontent}`}
          >
            <p>{item.description}</p>
            <img src={item.src} alt={item.alt} />
          </motion.div>
        ))}
        <motion.section
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={variants}
          className={classes.whatwedo}
        >
          <h3 className={classes.subheading}>What we do:</h3>
          <p className={classes.whatwedocontent1}>
            To help children with various disabilities and needy orphanage
            children irrespective of caste, creed, sex or religion for this
            purpose or in pursuance thereof to undertake, execute, support and
            assit any programs or projects with no profit motive designed to
            provide:
          </p>
          <ul className={classes.whatwedocontent2}>
            <li>
              To promote primary and higher education and employment
              opportunutuies to visually impaired, disabled and under privileged
              people.
            </li>
            <li>
              Food, shelter, clothing and other basic necessities for visullay
              impaired children.
            </li>

            <li>
              To provide vocational training on candle making, handcrafts,
              computer education, etc.
            </li>
            <li>
              Medical care and other activities like yoga and physical exercise
              to improve the health
            </li>
            <li>
              Educaitonal and recreational facilities for the orphanage children
              and provide facilities for them to lead a religious and meditative
              life.
            </li>
            <li>
              To conduct medical camps in all respects with the aproval of
              respective authorities and to provide medical health for poor.
            </li>
            <li>
              To increase accesibility to education and employment
              opportunutuies to visually impaired, by using technology and
              providing comprehensive vocational training.
            </li>
          </ul>
        </motion.section>
        <section className={classes.whatyoucando}>
          <h3>What you can do:</h3>
          <p>
            We, TEZAS working towards the best interest of the undeserved
            children with various disabilities, poor and orphan children, we
            ensure to make the best use of your valuable contributions. Through
            your continuous support, children and society witness developments
            that open windows to huge change in their lives. YOU CAN CONTRIBUTE
            FOR
          </p>
          <table className={classes.table}>
            <tr>
              <td>ACADEMIC YEAR EDUCATIONAL FEES PER STUDENT</td>
              <td>Rs.12,000/</td>
            </tr>
            <tr>
              <td>
                BRAILLE BOOKS FOR EACH VISUALLY IMPAIRED STUDENT (RS 3.000 X
                6BOOKS)
              </td>
              <td>Rs.18,000/</td>
            </tr>
            <tr>
              <td>DAY MEALS FOR ALL CHILDREN</td>
              <td>Rs.8,000/</td>
            </tr>
            <tr>
              <td>
                COMPUTER EDUCATION FOR QUALIFIED VISUALLY IMPAIRED CHILDREN
              </td>
              <td>Rs.9,500/</td>
            </tr>
            <tr>
              <td>MONTHLY GROCERIES EXPENSES</td>
              <td>Rs.10,000/</td>
            </tr>
          </table>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutContent;
