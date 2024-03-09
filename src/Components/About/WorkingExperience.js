import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./About.module.css";
import ExpImg from "../../images/business-ceo-analyzing-business-growth-graph.svg";
import SkillImg from "../../images/multi-tasking-ceo-handling-multiple-departments-with-ease.svg";
import KudosImg from "../../images/concept-of-business-employees-team-working-in-business-environment-work-culture.svg";
import { motion } from "framer-motion/dist/framer-motion";
import { SteppedEase, gsap } from "gsap";
import cvPdf from "../../images/RESUMED (1).pdf";

export default function WorkingExperience() {
  const main = useRef();
  const img = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      // const images = self.selector("#EXPPage");
      // const Skill = self.selector("#Skill");
      // const kudos = self.selector("#kudos")
      // gsap.to(images, {
      //   y: 0,
      //   // backgroundColor: "#9BABB8",
      //   x: -100,
      //   opacity: 0,
      //   // duration: 3,
      //   ease: "linear",
      //   scrollTrigger: {
      //     trigger: images,
      //     start: "50px",
      //     end: "650px",
      //     scrub: 1,
      //     markers: true,
      //   },
      // });
      // gsap.to(Skill, {
      //   x: -100,
      //   y: 0,
      //   opacity: 0,
      //   ease: "linear",
      //   // backgroundColor: "#0E2954",
      //   scrollTrigger: {
      //     trigger: images,
      //     start: "750px",
      //     end: "1000px",
      //     scrub: 1,
      //     // markers: true,
      //   },
      // });
      // gsap.to(kudos, {
      //   x: 0,
      //   y: -100,
      //   ease: "linear",
      //   // backgroundColor: "#D7C0AE",
      //   scrollTrigger: {
      //     trigger: images,
      //     start: "600px",
      //     end: "1000px",
      //     scrub: 1,
      //     // markers: true,
      //   },
      // });
    }, main);
    return () => {
      ctx.revert();
      // im.revert();
    }; // <- Cleanup!
  });
  const downloadFile = () => {
    fetch(cvPdf)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "CV.pdf"; // Specify the filename for the downloaded file
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error fetching the CV:", error);
      });
  };
  return (
    <div className={styles.workPage} ref={main}>
      <motion.div id="EXPPage" className={styles.wokingComponent}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.ImgContainerClass}
        >
          <img id="img1" width={"100%"} src={ExpImg} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.headerComponent}>EXPERIENCE</h1>
          <p>
            <div>
              <ul className={styles.unorderedList}>
                <li>
                  Msc. in Scientific Computing (Savitribai phule pune
                  university, Ganeshkhind, Pune)
                </li>
                <li>
                  Bsc. in Computer Science (PVP Collage, Loni, Pravaranagar)
                </li>
                <li>
                  2.3 years experience in Web Development and Product
                  Development
                </li>
              </ul>
              <h5 className={styles.headerComponent}>
                Within those 2.3 years, I have:
              </h5>
              <ul className={styles.unorderedList}>
                <li>
                  1.10 years experience in Product Development and Web
                  Developement
                </li>
                <ul>
                  <li>working on accounting based software</li>
                  <li>
                    working on react and various libraries like Antd, Bootstrap,
                    React Bootstrap, React Table, React Form, Yup, Ag-Grid,
                    redux, redux-toolkit, socket.io
                  </li>
                  <li>
                    Role is to creating features and build a product with given
                    figma designs
                  </li>
                </ul>
                <ul>
                  <li>
                    Also worked in Node js, express, jwt token, passport auth
                    and MongoDB
                  </li>
                </ul>
                <li>6 months of Internship on react js and react native</li>
                <li>2 months of experience on react js</li>
              </ul>
            </div>
          </p>
        </motion.div>
      </motion.div>
      {/* <hr /> */}

      <motion.div id="Skill" className={styles.wokingComponent}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.headerComponent}>SKILLS</h2>
          <p className={styles.paragraph}>
            Web Developement / Product Development / HTML and CSS / React
            Devlopment / Next JS / Redux / TypeScript / Antd / tailwindCSS /
            Bootstrap / React Bootstrap / MUI / React Query / Node JS / PHP /
            MongoDB / PLSQL / MYSQL
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonSlides}
              onClick={() => downloadFile()}
            >
              My Cv
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.ImgContainerClass}
        >
          <img src={SkillImg} />
        </motion.div>
      </motion.div>

      <motion.div id="kudos" className={styles.wokingComponent}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.ImgContainerClass}
        >
          <img src={KudosImg} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.ImgContainerClass}
        >
          <h2 className={styles.headerComponent}>KUDOS</h2>
          <p className={styles.paragraph} dc p>
            Most of what is in this portfolio is team work, it's very rare these
            days to make anything great all on your own. I have only included
            work that I had a large contribution. THANK YOU.
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonSlides}
              onClick={() => (window.location.href = "/contact")}
            >
              Contact me
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
