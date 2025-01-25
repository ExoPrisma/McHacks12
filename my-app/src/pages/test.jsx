import { useRef } from "react"
import { firestore } from "../firebase"
import { addDoc, collection } from "@firebase/firestore"

export default function Test() {
  const msgRef = useRef(null);
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(msgRef.current.value);

    let data = {
      message:msgRef.current.value 
    }

    try {
      await addDoc(ref, data); // Use await for consistency
      console.log("Document successfully written!");
      msgRef.current.value = ""; // Reset the input field after saving
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter message</label>
        <input type="text" ref={msgRef}></input>
        <button type="submit">Save</button>
      </form>
    </div>
  )

}