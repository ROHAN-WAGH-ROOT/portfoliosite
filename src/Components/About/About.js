import React, {
  Suspense,
  lazy,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "../../images/business-startup.svg";
import styles from "./About.module.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import Loader from "../Loader.js";
import { SteppedEase, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const WorkingExperience = lazy(() => import("./WorkingExperience"));
  const [currentWord, setCurrentWord] = useState("");
  const main = useRef();
  const img = useRef();

  useLayoutEffect(() => {
    var tl = new Timeline({
      paused: true,
    });
    tl.fromTo(
      "#anim-typewriter",
      2,
      {
        width: "0",
      },
      {
        width: "20.18em" /* same as CSS .line-1 width */,
        ease: SteppedEase.config(37),
      },
      0
    );
    // text cursor animation
    tl.fromTo(
      "#anim-typewriter",
      0.5,
      {
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(37),
      },
      0
    );

    tl.play();

    // const im = gsap.context((self) => {
    //   const image = self.selector("#img");
    //   gsap.from(image, {
    //     x: 0,
    //     scrollTrigger: {
    //       trigger: image,
    //       // start: "top 0%",
    //       // end: "top 50%",
    //       scrub: 1,
    //       // markers: true,
    //     },
    //   });
    //   gsap.to(image, {
    //     x: -500,
    //     opacity: 0,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: image,
    //       start: "top 0%",
    //       end: "top 50%",
    //       scrub: 1,
    //       markers: true,
    //     },
    //   });
    // }, img);
    // const ctx = gsap.context((self) => {
    //   const boxes = self.selector("#box");

    //   boxes.forEach((box) => {
    //     gsap.from(box, {
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: box,
    //         // start: "bottom bottom",
    //         // end: "top 50%",
    //         scrub: 1,
    //         // markers: true,
    //       },
    //     });
    //     gsap.to(box, {
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: box,
    //         start: "bottom bottom",
    //         end: "top 50%",
    //         scrub: true,
    //         markers: true,
    //       },
    //     });
    //   });
    // }, main);
    // return () => {
    //   ctx.revert();
    //   // im.revert();
    // }; // <- Cleanup!
  });

  // setTimeout(() => {
  //   return <div>hii</div>
  // }, 5000)
  return (
    <div className="scroll" ref={img}>
      <AnimatePresence>
        <div className={styles.containers}>
          <motion.div
            data-bgcolor="#3b3825"
            // initial={{ y: "10%" }}
            // animate={{ y: "0%" }}
            // transition={{ duration: 0.5, ease: "linear" }}
            layoutId="underline"
          >
            <h1 id="anim-typewriter" className={styles.headerComponent}>
              Me, Myself & I
            </h1>
            <motion.p
              // initial={{ opacity: 0 }}
              // animate={controls}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className={styles.paragraph}
            >
              I’m a Front-End Developer located in India. I have a serious
              passion for web-developement. Well-organised person, problem
              solver, independent employee with high attention to detail. Fan of
              UFC, outdoor activities and TV series. A family person, Interested
              in the entire frontend spectrum and working on ambitious projects
              with positive people.
              {currentWord}
            </motion.p>

            <a className={styles.achorTagCss} href="/contact">
              Let’s make something special.
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.imageContainer}
          >
            <img
              id="img"
              width={"auto"}
              src={Image}
              alt="image"
              draggable={"false"}
            />
          </motion.div>
        </div>

        {/* <hr /> */}
        <Suspense fallback={<Loader />}>
          <WorkingExperience />
        </Suspense>
      </AnimatePresence>
    </div>
  );
}
