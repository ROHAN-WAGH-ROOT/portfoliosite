import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import styles from "./Card/Cards.module.css";
export default function Loader() {
  const loaderLayout = {
    animationOne: {
      x: [-500, 0, -500],
      y: [0, -360, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };
  return (
    <>
      <motion.div
        className={styles.loader}
        variants={loaderLayout}
        animate={loaderLayout.animationOne}
      ></motion.div>
    </>
  );
}
