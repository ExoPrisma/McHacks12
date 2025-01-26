import { doc, getDoc, updateDoc} from "@firebase/firestore"
import { addPatientToQueue, getPatientStatus, listenToPatientUpdates, calculateWaitingTime } from "./statusServices.js";
import { firestore } from "../firebase.js";

const testAddPatientToQueue = async () => {
  const patientData = {
    id: "HE6420",
    arrival_time: "2024-12-30T11:00:00",
    triage_category: 2,
    status: {
      current_phase: "triaged",
      investigations: {
        labs: "ordered",
        imaging: "ordered",
      },
    },
    time_elapsed: 0,
  };

  const patientData2 = {
    id: "AA1111",
    arrival_time: "2024-12-30T11:00:00",
    triage_category: 1,
    status: {
      current_phase: "triaged",
      investigations: {
        labs: "pending",
        imaging: "ordered",
      },
    },
    time_elapsed: 0,
  };

  const patientData3 = {
    id: "AA1112",
    arrival_time: "2024-12-30T12:00:00",
    triage_category: 2,
    status: {
      current_phase: "triaged",
      investigations: {
        labs: "pending",
        imaging: "ordered",
      },
    },
    time_elapsed: 0,
  };

  await addPatientToQueue(patientData);
  await addPatientToQueue(patientData2);
  await addPatientToQueue(patientData3);

  // Verify the patient was added
  const patientRef = doc(firestore, "patients", patientData.id);
  const patientDoc = await getDoc(patientRef);

  console.assert(patientDoc.exists(), "Patient should exist in Firestore");
  console.assert(patientDoc.data().id === patientData.id, "Patient ID should match");
  console.assert(patientDoc.data().triageCategory === patientData.triage_category, "Triage category should match");

  console.log("Test addPatientToQueue passed!");
};

const testGetPatientStatus = async () => {
  const patientId = "HE6420";

  const patientStatus = await getPatientStatus(patientId);

  console.assert(patientStatus !== null, "Patient status should not be null");
  console.assert(patientStatus.id === patientId, "Patient ID should match");
  console.assert(patientStatus.triageCategory === 2, "Triage category should match");

  console.log("Test getPatientStatus passed!");
};

const testCalculateWaitingTime = () => {
  const patients = [
    { id: "patient1", triageCategory: 1, arrivalTime: "2024-12-30T10:00:00" },
    { id: "patient2", triageCategory: 2, arrivalTime: "2024-12-30T10:05:00" },
    { id: "patient3", triageCategory: 3, arrivalTime: "2024-12-30T10:10:00" },
  ];

  const hospitalCapacity = 2;
  const waitingTimes = calculateWaitingTime(patients, hospitalCapacity);

  console.assert(waitingTimes.length === 3, "Waiting times should be calculated for all patients");
  console.assert(waitingTimes[0].waitingTime === 0, "First patient should have 0 waiting time");
  console.assert(waitingTimes[1].waitingTime === 15, "Second patient should have 15 minutes waiting time");
  console.assert(waitingTimes[2].waitingTime === 38, "Third patient should have 38 minutes waiting time");

  console.log("Test calculateWaitingTime passed!");
};

const testListenToPatientUpdates = () => {
  const patientId = "HE6420";

  const unsubscribe = listenToPatientUpdates(patientId);

  // Simulate an update to the patient document
  setTimeout(async () => {
    const patientRef = doc(firestore, "patients", patientId);
    await updateDoc(patientRef, { timeElapsed: 60 });

    // Stop listening after the update
    unsubscribe();
  }, 2000);

  console.log("Test listenToPatientUpdates running. Check console for real-time updates.");
};

const runTests = async () => {
  await testAddPatientToQueue();
  await testGetPatientStatus();
  testCalculateWaitingTime();
  testListenToPatientUpdates();
};

runTests();

// const cleanupTestData = async () => {
//   const patientId = "test_patient_1";
//   const patientRef = doc(firestore, "patients", patientId);
//   await deleteDoc(patientRef);
//   console.log("Test data cleaned up.");
// };

// // Call this after all tests are done
// cleanupTestData();