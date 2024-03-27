import { doc, setDoc } from "firebase/firestore";
import db from "../../../config/firebase";
import { CreateTrainingDto } from "../../../dto/training/CreateTrainingDto";

const create = async (data: CreateTrainingDto) => {
  try {
    const newDocRef = doc(db, "trainings");
    const newTraining = new CreateTrainingDto(data.exercises, data.userId, data.name, new Date())
    const docRef = await setDoc(newDocRef, newTraining);
    return docRef;
  } catch (error) {
    throw error;
  }
};

export default create;
