import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../../config/firebase";

const readByUserId = async (userId: string) => {
  try {
    const trainingQuery = query(
        collection(db, "trainings"),
        where("userId", "==", userId)
    );
    const trainingDocs = await getDocs(trainingQuery);
    if (trainingDocs.empty) return [];
    const data = await trainingDocs.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    throw error;
  }
};

export default readByUserId;