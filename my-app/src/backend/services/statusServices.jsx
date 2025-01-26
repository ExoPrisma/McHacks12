import { doc, setDoc, collection, getDoc, getDocs, query, orderBy, updateDoc, onSnapshot } from "@firebase/firestore";
import { firestore } from "../firebase";

const addPatientToQueue = async (patientData) => {
  try {
    // Add the new patient to Firestore
    const patientRef = doc(firestore, "patients", patientData.id);
    await setDoc(patientRef, {
      id: patientData.id,
      arrivalTime: patientData.arrival_time,
      triageCategory: patientData.triage_category,
      queuePosition: {
        global: 0,   // Temporary value,
        category: 0, // Temporary value,
      },
      status: {
        currentPhase: patientData.status?.current_phase || "waiting",
        investigations: {
          labs: patientData.status?.investigations?.labs || "ordered",
          imaging: patientData.status?.investigations?.imaging || "ordered",
        },
      },
      timeElapsed: patientData.time_elapsed || 0,
    });

    console.log("Patient added to queue:", patientData.id);

    // Fetch all patients and sort by triageCategory
    const patientsQuery = query(collection(firestore, "patients"), orderBy("triageCategory"));
    const patientsSnapshot = await getDocs(patientsQuery);
    const patients = patientsSnapshot.docs.map((doc) => doc.data());

    // Update queue positions based on sorted list
    for (let i = 0; i < patients.length; i++) {
      const patient = patients[i];
      const patientRef = doc(firestore, "patients", patient.id);

      await updateDoc(patientRef, {
        queuePosition: {
          global: i + 1, // Global position in the queue
          category: patients
            .slice(0, i + 1)
            .filter((p) => p.triageCategory === patient.triageCategory).length, // Position within the same triage category
        },
      });
    }

    console.log("Queue updated based on triage category.");
  } catch (error) {
    console.error("Error adding patient to queue:", error);
  }
};

const getPatientStatus = async (patientId) => {
  try {
    const patientRef = doc(firestore, "patients", patientId);
    const patientDoc = await getDoc(patientRef);

    if (!patientDoc.exists()) {
      console.log("Patient not found:", patientId);
      return null;
    }

    const patientData = patientDoc.data();

    return {
      id: patientData.id,
      arrivalTime: patientData.arrivalTime,
      triageCategory: patientData.triageCategory,
      queuePosition: patientData.queuePosition,
      status: patientData.status,
      waitTimeMinutes: patientData.timeElapsed,
    };
  } catch (error) {
    console.error("Error retrieving patient information:", error);
    return null;
  }
};

const listenToPatientUpdates = (patientId) => {
  const patientRef = doc(firestore, "patients", patientId);

  const unsubscribe = onSnapshot(patientRef, (doc) => {
    if (doc.exists()) {
      const patientData = doc.data();
      console.log("Patient updated:", patientData);
    } else {
      console.log("Patient not found:", patientId);
    }
  });

  return unsubscribe;
};

const calculateWaitingTime = (patients, hospitalCapacity) => {
  // Define average processing times for each triage category (in minutes)
  const averageProcessingTimes = {
    1: 30,  // Triage Category 1
    2: 45,  // Triage Category 2
    3: 60,  // Triage Category 3
    4: 90,  // Triage Category 4
    5: 120, // Triage Category 5
  };

  // Sort patients by triage category (ascending order) and arrival time (ascending order)
  const sortedPatients = patients.sort((a, b) => {
    if (a.triageCategory === b.triageCategory) {
      return new Date(a.arrivalTime) - new Date(b.arrivalTime);
    }
    return a.triageCategory - b.triageCategory;
  });

  // Calculate waiting time for each patient
  let totalWaitingTime = 0;
  const waitingTimes = sortedPatients.map((patient) => {
    const processingTime = averageProcessingTimes[patient.triageCategory] || 60;
    const waitingTime = totalWaitingTime;
    totalWaitingTime += processingTime / hospitalCapacity;
    return {
      id: patient.id,
      waitingTime: Math.round(waitingTime),
    };
  });

  return waitingTimes;
};

// To stop listening later
// unsubscribe();

export { addPatientToQueue, getPatientStatus, listenToPatientUpdates, calculateWaitingTime }