import React from "react";
import style from "./work.module.css";
import Bank from "../../images/bank.png";
export default function Work() {
  return (
    <div className={style.container}>
      <div>
        <img draggable="false" src={Bank} alt="" className={style.image} />

        <div className={style.containerOfPara}>
          <div className={style.workTitle}>Work</div>
          <div className={style.paragraph}>
            This is a showcase of my work in variety of fields including web
            development, backend development
          </div>
          <ol className={style.paragraph}>
            <li>
              Experienced in the banking domain, having collaborated with
              clients such as YES Bank, IDBI Bank, and JANA Small Finance Bank.
              Additionally, contributed to the development of banking products
              like Fantail-P.
            </li>
            <li>
              Proficient in the accounting domain, specializing in overcoming
              challenges related to tally record insertion. Developed automation
              solutions to enhance efficiency in this area, collaborating with
              the product Suvit.
            </li>
          </ol>
        </div>
      </div>
      <div></div>
    </div>
  );
}
