import React, { useEffect } from "react";
import "../CSS/SkillCard.css";
import { motion, useAnimation } from "framer-motion";
import { spring } from "popmotion";
import { useInView } from "react-intersection-observer";

function SkillCard({ img, skillName, percentage }) {
  const squareVariants = {
    visible: {
      opacity: 1,
      y: -10,
      transition: { duration: 1.5, ease: "easeInOut", bounce: 0.5 },
    },
    hidden: { opacity: 0, y: 10, transition: { duration: 0.5 } },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      whileHover={{
        scale: 1.5,
        boxShadow: "0px 0px .3px .3px grey",
      }}
      transition={{
        type: "spring",
        stiffness: 1,
        damping: 20,
        duration: 0.1,
      }}
      className="skillCard"
    >
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <h2>{skillName}</h2>
      <h3>{percentage}</h3>
    </motion.div>
  );
}
export default SkillCard;
