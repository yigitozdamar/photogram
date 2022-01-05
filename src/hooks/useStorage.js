import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // create reference
    console.log(projectStorage);
    const storageRef = ref(projectStorage, file.name);
    console.log(storageRef);

    // to create firestore ref 1st step
    const collectionRef = collection(projectFirestore, "images");

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          //to create timestamp
          const createdAt = serverTimestamp();

          //after creating collectionRef, create payload and send it to firestore
          const payload = { url, createdAt };
          const docRef = addDoc(collectionRef, payload);
          console.log(docRef);

          setUrl(url);
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
