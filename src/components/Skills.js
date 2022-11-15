import React from "react";
import "../CSS/Skills.css";
import SkillCard from "./SkillCard";
import htmlLogo from "../imgs/html.png";
import cssLogo from "../imgs/css.png";
import javascriptLogo from "../imgs/javascript.png";
import reactLogo from "../imgs/react.png";
import phpLogo from "../imgs/php.png";
import mySqlLogo from "../imgs/mysql.png";
import cLogo from "../imgs/c.png";
import cPPLogo from "../imgs/CPP.png";
import { spring } from "popmotion";
import { motion } from "framer-motion";
import topWave from "../SkillsTop.svg";

function Skills() {
  const mySkills = [
    {
      id: 1,
      img: htmlLogo,
      skillName: "HTML",
      percentage: "60%",
    },
    {
      id: 2,
      img: cssLogo,
      skillName: "CSS",
      percentage: "50%",
    },
    {
      id: 3,
      img: javascriptLogo,
      skillName: "Javascript",
      percentage: "40%",
    },
    {
      id: 4,
      img: reactLogo,
      skillName: "React",
      percentage: "40%",
    },
    {
      id: 5,
      img: phpLogo,
      skillName: "PHP",
      percentage: "20%",
    },
    {
      id: 6,
      img: mySqlLogo,
      skillName: "MySql",
      percentage: "30%",
    },
    {
      id: 7,
      img: cLogo,
      skillName: "C",
      percentage: "55%",
    },
    {
      id: 8,
      img: cPPLogo,
      skillName: "C++",
      percentage: "45%",
    },
  ];

  return (
    <motion.div
      className="skillSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, type: spring, duration: 0.1 }}
    >
      <div className="waveBox">
        <img src={topWave} alt="" />
      </div>
      <h1>SKILLS</h1>
      <div className="textImageBox">
        <div className="skillContainer">
          {mySkills?.map(({ id, img, skillName, percentage }) => (
            <SkillCard
              key={id}
              img={img}
              skillName={skillName}
              percentage={percentage}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
