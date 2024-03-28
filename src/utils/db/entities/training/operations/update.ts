import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../../../config/firebase";
import { UpdateTrainingDto } from "../../../dto/training/UpdateTrainingDto";

const update = async (id: string, data: Partial<UpdateTrainingDto>) => {
  try {
    const docRef = doc(db, "trainings", id);
    await updateDoc(docRef, data);
    const updatedDoc = await getDoc(docRef);
    if (!updatedDoc.exists()) throw new Error("Document does not exist");
    return updatedDoc.data();
  } catch (error) {
    throw error;
  }
};

export default update;
