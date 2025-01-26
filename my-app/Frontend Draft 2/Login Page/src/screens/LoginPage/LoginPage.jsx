import React from "react";
import { ContinueButton } from "../../components/ContinueButton";
import { TicketNumberInput } from "../../components/TicketNumberInput";
import "./style.css";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="background-blue">
            <img
              className="image-patient"
              alt="Image patient"
              src="https://c.animaapp.com/LfGHhwlG/img/image-2-patient@2x.png"
            />
          </div>

          <div className="background-white" />

          <ContinueButton className="continue-button-instance" />
          <div className="family-login-info">
            <div className="div">Authorized Code</div>

            <div className="frame">
              <div className="text-wrapper-2">Enter authorized code here</div>
            </div>

            <div className="text-wrapper-3">
              Authorized code example: AB12CD34
            </div>
          </div>

          <div className="text-wrapper-4">FAMILY</div>

          <img
            className="image-pulse"
            alt="Image pulse"
            src="https://c.animaapp.com/LfGHhwlG/img/image-1-pulse@2x.png"
          />

          <div className="patient-login-info">
            <div className="text-wrapper-5">PATIENT</div>

            <div className="div-2">
              <div className="div-2">
                <div className="div">Ticket Number</div>

                <TicketNumberInput stateProp="default" />
                <div className="text-wrapper-3">
                  Ticket number example: AB1234
                </div>
              </div>

              <div className="div-2">
                <div className="div">Hospital Card Number</div>

                <div className="frame">
                  <p className="text-wrapper-2">
                    Enter hospital card number here
                  </p>
                </div>

                <p className="text-wrapper-3">
                  Hospital card number example: H1234567
                </p>
              </div>

              <div className="div-2">
                <div className="div">Phone Number</div>

                <div className="frame">
                  <p className="text-wrapper-2">Enter main phone number here</p>
                </div>

                <div className="text-wrapper-3">
                  Phone number example: 1514123456
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
