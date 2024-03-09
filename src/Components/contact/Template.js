import React from "react";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";
import style from "./contact.module.css";
export default function Template() {
  const shareMail = () => {
    var emailAddress = "rohanwagh234@gmail.com";
    var subject = "Hello!";
    var body = "Just wanted to say hi!";
    var mailtoLink =
      "mailto:" +
      emailAddress +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    return window.open(mailtoLink);
  };
  return (
    <div className={style.templateContainer}>
      <h1 className={style.h1}>Hello.</h1>
      <p className={style.p}>
        I can help to develop product and websites. please feel free to contact
        me🙏.
      </p>
      <div className={style.h3Container}>
        <h3 className={style.h3}>🧑‍🍼Rohan Dipak Wagh</h3>
        <h3 className={style.h3}>📞9767501327 / 8668213636</h3>
        <h3 className={style.h3}>🏡Shirdi, Ahmednagar, Maharashtra, India</h3>
      </div>
      <div>
        <ul className={style.listContainer}>
          <li>
            <div onClick={shareMail} className={style.anchor}>
              <div>
                <BsMailbox className={style.img} />
              </div>
              Mail
            </div>
          </li>
          <li>
            <a
              className={style.anchor}
              href="https://www.linkedin.com/in/rohan-wagh-916725205/"
              target="_blank"
            >
              <div>
                <BsLinkedin className={style.img} />
              </div>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={style.anchor}
              href="https://github.com/ROHAN-WAGH-ROOT"
              target="_blank"
            >
              <div>
                <BsGithub className={style.img} />
              </div>
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
