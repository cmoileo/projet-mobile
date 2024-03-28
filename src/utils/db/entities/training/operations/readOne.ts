import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import db from "../../../config/firebase";

const readOneByUserId = async (trainingId: string) => {
    try {
        const trainingRef = doc(db, "trainings", trainingId)
        const trainingDocs = await getDoc(trainingRef);
        if (!trainingDocs) return [];;
        return trainingDocs.data();
    } catch (error) {
        throw error;
    }
};

export default readOneByUserId;