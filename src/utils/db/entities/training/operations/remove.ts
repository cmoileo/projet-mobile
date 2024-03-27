import { deleteDoc, doc } from "firebase/firestore";
import db from "../../../config/firebase";

const remove = async (id: string) => {
  try {
    const docRef = doc(db, "trainings", id);
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    throw error;
  }
};

export default remove;
