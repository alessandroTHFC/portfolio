import React from "react";
import "../CSS/Header.css";
import { motion } from "framer-motion";
import { spring } from "popmotion";

function Header() {
  return (
    <motion.div
      className="Nav"
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, ease: "easeInOut", duration: 1.4 }}
    >
      <div className="NavContents">
        <h2 className="logoName">
          <span>AP</span>angrazio
        </h2>
        <div className="NavContentsJr">
          <a>
            <h4>About</h4>
          </a>
          <a>
            <h4>Skills</h4>
          </a>
          <a>
            <h4>Contact</h4>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
