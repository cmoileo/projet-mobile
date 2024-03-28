import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import db from "../../../config/firebase";
import { CreateTrainingDto } from "../../../dto/training/CreateTrainingDto";
import ExercicesData from "../../../../../../assets/datas/exercices.json";

const create = async (data: CreateTrainingDto) => {
  try {
    const newDocRef = collection(db, "trainings");
    const newTraining = {
      exercises: data.exercises.map((exercise) => {
        const createdExercise = {
          id: exercise.id,
          perf: [],
        };
        return createdExercise;
      }),
      userId: data.userId,
      name: data.name,
      date: data.date,
    };
    const docRef = await addDoc(newDocRef, Object(newTraining));
    return docRef;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default create;
