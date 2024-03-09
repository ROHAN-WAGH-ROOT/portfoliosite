import React from "react";
import style from "./index.module.css";
export default function Notify({ text }) {
  return (
    <div className={style.Container}>
      <div className={style.text}>
        <span>🦄 </span> {text}
      </div>
    </div>
  );
}
