import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";

const useFirestore = (collections) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const orderedOrders = query(
      collection(projectFirestore, "images"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(orderedOrders, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
  }, [collections]);
  return { docs };
};

export default useFirestore;
