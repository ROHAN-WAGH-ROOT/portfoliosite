import React from "react";
import Template from "./Template";
import styles from "./contact.module.css";
import Form from "./form";

export default function Contact() {
  return (
    <div className={styles.mainContainer}>
      <Template />
      <Form />
    </div>
  );
}
