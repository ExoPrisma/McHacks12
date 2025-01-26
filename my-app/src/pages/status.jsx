import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { firestore } from "../backend/firebase.js";
import { collection, getDocs } from "@firebase/firestore";
import { getPatientStatus, calculateWaitingTime } from "../backend/services/statusServices.js";
import ButtonSample from "../components/ui/ButtonSample/ButtonSample.jsx";
import "./status.css";

const StatusPage = () => {
  const { id } = useParams();
  const hospitalCapacity = 3; 
  const [patientData, setPatientData] = useState(null);
  const [waitTime, setWaitTime] = useState("00:00");
  const navigate = useNavigate();
  
  const lvl = {
    1: "Resuscitation",
    2: "Emergent",
    3: "Urgent",
    4: "Less-urgent",
    5: "Non-urgent"
  };

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const data = await getPatientStatus(id);
        setPatientData(data);

        const patientsCollection = collection(firestore, "patients"); // Assuming the collection is named "patients"
        const patientSnapshot = await getDocs(patientsCollection);
        const patientsList = patientSnapshot.docs.map(doc => doc.data());

        const result = calculateWaitingTime(patientsList, hospitalCapacity);

        // Set the estimated wait time for the current patient
        if (result.length > 0) {
          const patientWaitTime = result.find(patient => patient.id === data.id)?.waitingTime;
          if (patientWaitTime !== undefined) {
            const hours = Math.floor(patientWaitTime / 60);
            const minutes = patientWaitTime % 60;
            setWaitTime(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);
          }
        }

      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [id]); // Fetch data when `id` changes

  const handleShareClick = () => {
    alert("Share functionality triggered");
  };

  const handleTrackSymptomsClick = () => {
    navigate(`/${id}/tracker`);
  };


  if (!patientData) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <div className="status-page">
      <div className="div">
        <div className="overlap">
          <div className="buttons">
            <ButtonSample
              className="track-symptoms"
              divClassName="button-sample-instance"
              text="Track symptoms"
              onClick={handleTrackSymptomsClick}
            />
            <div className="overlap-group">
              <ButtonSample
                className="share-button"
                divClassName="design-component-instance-node"
                text="Share"
                onClick={handleShareClick}
              />
              <img
                className="share-icon"
                alt="Share icon"
                src="https://c.animaapp.com/GvOwWaYP/img/share-icon@2x.png"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          <p className="text-wrapper">
            You will be treated as soon as possible.
          </p>

          <div className="time-elapsed-block">
            <div className="overlap-2">
              <div className="text-wrapper-2">Time Elapsed</div>
              <div className="text-wrapper-3">{patientData.waitTimeMinutes} min</div>
            </div>
          </div>

          <div className="arrival-time-block">
            <div className="overlap-2">
              <div className="text-wrapper-4">Arrival Time</div>
              <div className="text-wrapper-3">{patientData.arrivalTime.slice(11, 16)}</div>
            </div>
          </div>

          <div className="current-status-block">
            <div className="overlap-3">
              <div className="text-wrapper-5">Current Status</div>
              <div className="current-status-DATA">{patientData.status.currentPhase}</div>
            </div>
          </div>

          <div className="triage-level-block">
            <div className="overlap-3">
              <div className="overlap-group-2">
                <div className="text-wrapper-6">Triage Level</div>
                <div className="ellipse" />
                <div className="triage-level-DATA">{patientData.triageCategory}</div>
              </div>
              <div className="text-wrapper-7">{lvl[patientData.triageCategory]}</div>
            </div>
          </div>

          <div className="estimated-wait-time">
            <div className="overlap-4">
              <div className="wait-time">
                <div className="overlap-group-3">
                  <div className="ellipse-2" />
                  <img
                    className="group"
                    alt="Group"
                    src="https://c.animaapp.com/GvOwWaYP/img/group-2@2x.png"
                  />
                  <div className="ellipse-3" />
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="https://c.animaapp.com/GvOwWaYP/img/rectangle-4.svg"
                  />
                </div>
              </div>
              <p className="p">
                Wait times may change as we prioritize urgent cases. Thank you
                for your patience.
              </p>
              <div className="estimated-wait-time-2">{waitTime}</div>
            </div>
            <div className="text-wrapper-8">Estimated Wait Time</div>
          </div>
        </div>

        <div className="name-ID">
          <div className="overlap-5">
            <div className="name-DATA">Hello John Doe,</div>
          </div>

          <div className="ID-number-DATA">ID : {patientData.id}</div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;