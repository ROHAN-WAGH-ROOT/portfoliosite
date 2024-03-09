import { BsGithub } from "react-icons/bs";
import styles from "../../App.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function Information() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "-30%" }}
        animate={{ x: "0" }}
        transition={{ duration: 0.5 }}
        className={styles.Info}
      >
        <h1 className={styles.homeContaintOfInfo}>Rohan Dipak Wagh</h1>
        <div className={styles.homeContaintOfDescription}>
          Front-End Developer and work with React, Node, MongoDB, etc.
        </div>
        <div className={styles.homeContaintOfDescription}>
          {/* Resently worked in Suvit fintech pvt ltd */}
        </div>
        <div className={styles.homeContaintOfDescription}>
          <BsGithub
            to={"https://github.com/ROHAN-WAGH-ROOT"}
            href="https://github.com/ROHAN-WAGH-ROOT"
            className={styles.icon}
          />
          <NavLink
            className={styles.githubLink}
            to={"https://github.com/ROHAN-WAGH-ROOT"}
            target="_blank"
          >
            Go to github profile
          </NavLink>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
