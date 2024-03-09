import React from "react";
import "./Conatactpage.css";
import ConatactForm from "../Components/ConatactForm";

export default function Conatactpage() {
  return (
    <div className="contactContainer">
      <div>
        {/* <div className="template">
          <Template />
        </div> */}
        <div className="form">
          <ConatactForm />
        </div>
      </div>
    </div>
  );
}
