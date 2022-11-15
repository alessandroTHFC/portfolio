import React from "react";
import "../CSS/Banner.css";
import ProfilePic from "../profilePic.jpg";
import { motion } from "framer-motion";
import { spring } from "popmotion";

function Banner() {
  return (
    <div className="main-banner">
      <motion.div
        className="imageDiv"
        style={{ backgroundImage: `url(${ProfilePic})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, type: spring, duration: 1.5, bounce: 0.5 }}
      ></motion.div>
      <motion.div
        className="textDiv"
        intital={{ y: 150 }}
        animate={{ y: -60, opacity: 1 }}
        transition={{ delay: 1, ease: "easeInOut", duration: 2 }}
      >
        <h2 className="name">
          <span>A</span>lessandro <span>P</span>angrazio
        </h2>
        <p className="occupation">Front-End Developer</p>
      </motion.div>
    </div>
  );
}

export default Banner;
