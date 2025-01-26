import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueButton from "../components/ui/ContinueButton/ContinueButton.jsx";
import "./login.css";
import { addPatientToQueue, getPatientByShareCode } from "../backend/services/statusServices.js";

const LoginPage = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [hospitalCardNumber, setHospitalCardNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authorizationNumber, setAuthorizationNumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (ticketNumber && hospitalCardNumber && phoneNumber) {
      const currentDate = new Date();
      const currentTime = currentDate.toISOString();

      const patientData = {
        id: ticketNumber,
        hospitalCardNumber,
        phoneNumber,
        currentTime
      };

      await addPatientToQueue(patientData);
      navigate(`/${ticketNumber}/status`);
    } else if (authorizationNumber) {
      const data = await getPatientByShareCode(authorizationNumber)
      if (data) {
        navigate(`/${data.id}/status`);
      } else{
        console.log("Patient not found, cannot navigate");
      }
    } else {
      alert("Please fill in the required fields.");
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

          {/* Button */}
          <ContinueButton
            className="continue-button-instance"
            onClick={handleLogin}
          />

          {/* Patient Form */}
          <div className="patient-login-info">
            <div className="text-wrapper-5">PATIENT</div>
            <div className="div-2">
              <div className="div">Ticket Number</div>
              <div className="frame">
                <input
                  type="text"
                  placeholder="Enter ticket number here"
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                />
              </div>
              <div className="text-wrapper-3">Ticket number example: AB1234</div>
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
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="text-wrapper-3">
                Phone number example: 1514123456
              </div>
            </div>
          </div>

          {/* Family Form */}
          <div className="family-login-info">
            <div className="text-wrapper-4">FAMILY</div>
            <div className="div">Authorization Code</div>
            <div className="frame">
              <input
                type="text"
                placeholder="Enter authorization code here"
                value={authorizationNumber}
                onChange={(e) => setAuthorizationNumber(e.target.value)}
              />
            </div>
            <div className="text-wrapper-3">
              Authorization code example: AB12CD34
            </div>
          </div>

          <img
            className="image-pulse"
            alt="Image pulse"
            src="https://c.animaapp.com/LfGHhwlG/img/image-1-pulse@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;