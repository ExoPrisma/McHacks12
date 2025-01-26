import { useState } from "react";
import { setDoc, doc } from "@firebase/firestore";
import { firestore } from "../../../backend/firebase.js";
import PropTypes from "prop-types";
import "./style.css";

const StatusPageConsent = ({ onClose, patientId }) => {
  const [shareCode, setShareCode] = useState(null);

  const generateShareCode = () => {
    return Math.random().toString(36).substring(2, 10); // Generates a random alphanumeric string
  };

  const isValidShareCode = (shareCode) => {
    const regex = /^[a-zA-Z0-9]{8}$/;
    return regex.test(shareCode);
  };

  const updatePatientData = async (patientId) => {
    const patientRef = doc(firestore, "patients", patientId);

    // Generate the share code
    let shareCode = generateShareCode();

    // Check if the generated shareCode is valid
    if (!isValidShareCode(shareCode)) {
      console.error("Generated shareCode is invalid:", shareCode);
      return;
    }

    try {
      await setDoc(
        patientRef,
        { shareCode: shareCode },
        { merge: true }
      );

      console.log("Patient data updated with share code:", shareCode);
      setShareCode(shareCode);
    } catch (error) {
      console.error("Error updating patient data:", error);
    }
  };

  const handleAgree = async () => {
    await updatePatientData(patientId);
  };

  const handleClose = () => {
    setShareCode(null);  // Reset share code when closing
    onClose();           // Call the onClose function passed from the parent
  };

  return (
    <div className="consent-modal-overlay">
      <div className="consent-modal">
        <div className="consent-content">
          {shareCode ? (
            <>
              <h2>Share Code</h2>
              <p className="share-code">{shareCode}</p>
              <p>
                Your trusted recipient can use this code to monitor your status.
              </p>
              <button className="consent-button close" onClick={handleClose}>
                Close
              </button>
            </>
          ) : (
            <>
              <h2>Consent to Share Information</h2>
              <p>
                By sharing this code, I consent to share real-time information about my emergency room visit, including my waiting time, triage level, arrival time, current status, and symptoms, with the recipients of this code.
              </p>
              <p>
                I understand this information will be shared solely for their awareness and support, in compliance with applicable privacy regulations.
              </p>
              <div className="consent-buttons">
                <button className="consent-button agree" onClick={handleAgree}>
                  I Agree
                </button>
                <button className="consent-button cancel" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

StatusPageConsent.propTypes = {
  onClose: PropTypes.func.isRequired, // Function to close the modal
  patientId: PropTypes.string.isRequired, // Patient data passed as a prop
};

export default StatusPageConsent;