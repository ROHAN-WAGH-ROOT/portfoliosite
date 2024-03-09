import React from "react";
import styles from "./ContactPage.module.css";
import image from "../images/business-startup.svg";
export default function ContactPage() {
  const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };

  const validate = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      console.log("value", e.target[i].name, e.target[i].value);
    }
    // console.log(e)
    // [value.target.name]: ta
  };

  
  return (
    <div className={styles.mainClass}>
      <div className={styles.stripeContainer}>
        <div className={styles.firstComp}>{/* <img src={image} /> */}</div>
        
        <div className={styles.nextStep}>
          <div className={styles.firstComp}>
           
          </div>
        </div>
      </div>
    </div>
  );
}
