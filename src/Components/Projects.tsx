import { db } from "../Components/FBconfig";
import { collection, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  technologies: string;
  github: string;
  url: string;
  pic: string;
};

const Projects = () => {
  const [fetchedProjects, setFetchedProjects] = useState<Project[]>([]);

  const getAllProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const pArray = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Project)
      );
      setFetchedProjects(pArray);
      console.log(fetchedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div>
      <h1>test</h1>
      {fetchedProjects.map((project) => {
        return <div key={project.id}>{project.name}</div>;
      })}
    </div>
  );
};

export default Projects;
