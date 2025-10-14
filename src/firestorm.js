import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // your Firestore instance

const fetchJobs = async () => {
  const querySnapshot = await getDocs(collection(db, "jobs"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const fetchTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
