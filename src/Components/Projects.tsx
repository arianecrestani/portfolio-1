import { db } from "../Components/FBconfig";
import { query, collection, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";

const projects = () => {
  const [fetchedProjects, setFetchedProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const pArray = [];
      // console.log("querySnapshot: ", querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const message = {
          id: doc.id,
          ...doc.data(),
        };
        pArray.push(message);
        setFetchedProjects(pArray);
        // console.log(message)
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return <div>projects</div>;
};

export default projects;
