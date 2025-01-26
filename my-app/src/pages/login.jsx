import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueButton from "../components/ui/ContinueButton/ContinueButton.jsx";
import TicketNumberInput from "../components/ui/TicketNumberInput/TicketNumberInput.jsx";
import "./login.css";
import { addPatientToQueue } from "../backend/services/statusServices.js";

const LoginPage = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [hospitalCardNumber, setHospitalCardNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (ticketNumber && hospitalCardNumber && phoneNumber) {
      // Create a new patient
      const patientData = {
        id: ticketNumber, 
        hospitalCardNumber,
        phoneNumber,
        status: "waiting",
      };

      await addPatientToQueue(patientData);

      // Redirect to the status page
      navigate(`/${ticketNumber}/status`);
    }
  };

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

          <ContinueButton
            className="continue-button-instance"
            onClick={handleLogin}
          />
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

                <TicketNumberInput
                  stateProp="default"
                  onChange={(e) => setTicketNumber(e.target.value)}
                />
                <div className="text-wrapper-3">
                  Ticket number example: AB1234
                </div>
              </div>

              <div className="div-2">
                <div className="div">Hospital Card Number</div>

                <div className="frame">
                  <input
                    type="text"
                    placeholder="Enter hospital card number here"
                    value={hospitalCardNumber}
                    onChange={(e) => setHospitalCardNumber(e.target.value)}
                  />
                </div>

                <p className="text-wrapper-3">
                  Hospital card number example: H1234567
                </p>
              </div>

              <div className="div-2">
                <div className="div">Phone Number</div>

                <div className="frame">
                  <input
                    type="text"
                    placeholder="Enter main phone number here"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} // Capture phone number
                  />
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

export default LoginPage;