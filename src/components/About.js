import React, { useState } from "react";
import "../CSS/About.css";
import image1 from "../imgs/image-1.jpg";
import image2 from "../imgs/image-2.jpg";
import image3 from "../imgs/image-3.jpg";
import image4 from "../imgs/image-4.jpeg";
import image5 from "../imgs/image-5.jpg";
import image6 from "../imgs/image-6.jpg";
import wave from "../AboutBottom.svg";
import { easeInOut } from "popmotion";
import { scale } from "style-value-types";

function About() {
  const [hoveredImage, setHoveredImage] = useState("");

  return (
    <div className="aboutSection">
      {/* main About Page  */}
      <div className="textBigBox">
        {/* internal text box that contains background wave image */}
        <div className="waveBox">
          <img src={wave} alt="" />
        </div>

        <div className="gridBox">
          {/* About Heading Sq */}
          <div className="grdSq--0">
            <div className="aboutBox">
              <p>
                <span className="about">About</span>
                <br />
                <span className="me">me</span>
              </p>
              <ul>
                <li>
                  <span
                    onMouseEnter={() => setHoveredImage("born")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    Born
                  </span>
                  : 1992
                </li>
                <li>
                  {" "}
                  Graduated
                  <span
                    onMouseEnter={() => setHoveredImage("school")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    {" "}
                    Highschool
                  </span>
                </li>
                <li>
                  Lived in
                  <span
                    onMouseEnter={() => setHoveredImage("travel")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    {" "}
                    Europe
                  </span>{" "}
                  for a Year
                </li>
                <li>
                  Worked As A
                  <span
                    onMouseEnter={() => setHoveredImage("waiter")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    {" "}
                    Waiter
                  </span>
                </li>
                <li>
                  Loves Working in The
                  <span
                    onMouseEnter={() => setHoveredImage("garden")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    {" "}
                    Garden
                  </span>
                </li>
                <li>
                  Worked as a
                  <span
                    onMouseEnter={() => setHoveredImage("tradie")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    {" "}
                    Tiler/Landscaper
                  </span>
                </li>
                <li>
                  Became a Student at
                  <span
                    onMouseEnter={() => setHoveredImage("42")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    {" "}
                    42Adelaide
                  </span>
                  : 2020
                </li>
                <li>
                  Trainee Software Engineer at
                  <span
                    onMouseEnter={() => setHoveredImage("sra")}
                    onMouseLeave={() => setHoveredImage("")}
                  >
                    {" "}
                    SRA
                  </span>
                  : 2022
                </li>
              </ul>
            </div>
          </div>

          {/* sra*/}
          <div
            className="grdSq--1"
            style={
              hoveredImage === "sra"
                ? { opacity: 1, transform: "scale(1.1)" }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg grdImg--1"></div>
          </div>

          {/* 42 */}
          <div
            className="grdSq--2"
            style={
              hoveredImage === "42"
                ? { opacity: 1, transform: "scale(1.2)" }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg  grdImg--2"></div>
          </div>

          {/* born */}
          <div
            className="grdSq--3"
            style={
              hoveredImage === "born"
                ? { opacity: 1, transform: "scale(1.2)" }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg grdImg--3 "></div>
          </div>

          {/* tradie */}
          <div
            className="grdSq--4"
            style={
              hoveredImage === "tradie"
                ? {
                    opacity: 1,
                    transform: "scale(1.2)",
                  }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg grdImg--4"></div>
          </div>

          {/* waiter*/}
          <div
            className="grdSq--5"
            style={
              hoveredImage === "waiter"
                ? { opacity: 1, transform: "scale(1.2)" }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg grdImg--5"></div>
          </div>

          {/* travel */}
          <div
            className="grdSq--6"
            style={
              hoveredImage === "travel"
                ? { opacity: 1, transform: "scale(1.2)" }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg grdImg--6"></div>
          </div>

          {/* garden */}
          <div
            className="grdSq--7"
            style={
              hoveredImage === "garden"
                ? { opacity: 1, transform: "scale(1.2)" }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg grdImg--7"></div>
          </div>
          {/* school */}
          <div
            className="grdSq--8"
            style={
              hoveredImage === "school"
                ? { opacity: 1, transform: "scale(1.2)" }
                : { opacity: 0.1 }
            }
          >
            <div className="grdImg grdImg--8"></div>
          </div>
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
    </div>
  );
}

export default About;
