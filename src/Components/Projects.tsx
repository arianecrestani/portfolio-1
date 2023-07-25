import { db } from "../Components/FBconfig";
import { query, collection } from "firebase/firestore";

import { useEffect, useState } from "react";

const projects = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  function fetchProjects() {
    const ProjectsRef = collection(db, "projects");
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return <div>projects</div>;
};

export default projects;
