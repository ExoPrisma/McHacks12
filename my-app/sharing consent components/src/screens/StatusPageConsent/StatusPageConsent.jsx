import React from "react";
import "./style.css";

export const StatusPageConsent = () => {
  return (
    <div className="status-page-consent">
      <div className="div">
        <p className="consent-text">
          <span className="text-wrapper"> By sharing this code, I </span>

          <span className="span">consent to share</span>

          <span className="text-wrapper">
            {" "}
            real-time information about my emergency room visit, including my{" "}
          </span>

          <span className="span">
            waiting time, triage level, arrival time, current status, and
            symptoms
          </span>

          <span className="text-wrapper">
            , with the recipients of this code. <br />
            <br />I understand this information will be shared solely for their
            awareness and support, in compliance with applicable privacy
            regulations.
          </span>
        </p>

        <div className="check-icon" />

        <img
          className="close-icon"
          alt="Close icon"
          src="https://c.animaapp.com/ACSgRA6X/img/close-icon@2x.png"
        />
      </div>
    </div>
  );
};
