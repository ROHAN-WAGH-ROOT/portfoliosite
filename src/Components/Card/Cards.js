import React from "react";
import styles from "./Cards.module.css";
export default function Cards({ title, body, link, icon }) {
  const CustomTag = icon;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.icon}>
        {<CustomTag className={styles.CustomTag} />}
      </div>
      <div className={styles.title}>{title}</div>
      <hr className={styles.hr} />
      <div className={styles.bodyOfCard}>{body}</div>

      <div
        onClick={() => window.location.replace(link)}
        className={styles.link}
      >
        Contact on {title}
      </div>
    </div>
  );
}
