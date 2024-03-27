import { collection, getDocs } from "firebase/firestore";
import db from "../../../config/firebase";

const read = async () => {
  try {
    const trainingDocs = await getDocs(collection(db, "trainings"));
    if (trainingDocs.empty) return [];
    const data = trainingDocs.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    throw error;
  }
};

export default read;
