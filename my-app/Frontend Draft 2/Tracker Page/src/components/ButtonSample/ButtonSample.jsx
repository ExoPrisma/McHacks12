/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ButtonSample = ({ className, divClassName, text = "Text" }) => {
  return (
    <div className={`button-sample ${className}`}>
      <div className={`text ${divClassName}`}>{text}</div>
    </div>
  );
};
