import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import Notify from "../Notification/index";

export default function form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  });
  const [notify, setNotify] = useState({ status: false, text: "" });

  useEffect(() => {
    notify.status &&
      setTimeout(() => {
        setNotify({ status: false, text: "" });
      }, 3000);
  }, [notify.status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.firstName == "" ||
      data.lastName == "" ||
      data.email == "" ||
      data.subject == "" ||
      data.message == "" ||
      data.phone == ""
    ) {
      setNotify({ status: true, text: "All fields are required" });
    } else {
      setNotify({ status: true, text: "Response sended successfully" });
      setData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        subject: "",
      });
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputName}>
          <div className={styles.first}>
            <input
              className={styles.input}
              name="firstName"
              type="text"
              value={data.firstName}
              onChange={onChange}
              placeholder="First Name🐯"
            />
          </div>
          <div className={styles.second}>
            <input
              className={styles.input}
              name="lastName"
              value={data.lastName}
              onChange={onChange}
              type="text"
              placeholder="Last Name🐯"
            />
          </div>
        </div>
        <div className={styles.inputEmail}>
          <input
            name="email"
            type="email"
            onChange={onChange}
            value={data.email}
            placeholder="Email Address📬"
          />
        </div>
        <div className={styles.inputPhone}>
          <input
            name="phone"
            type="text"
            onChange={onChange}
            value={data.phone}
            placeholder="Phone Number📞"
          />
        </div>
        <div className={styles.inputSubject}>
          <input
            name="subject"
            type="text"
            value={data.subject}
            onChange={onChange}
            placeholder="Subject🔖"
          />
        </div>
        <div className={styles.inputMessage}>
          <textarea
            name="message"
            value={data.message}
            onChange={onChange}
            placeholder="Message✍️"
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </div>
      </form>
      {notify.status && <Notify text={notify.text} />}
    </div>
  );
}
