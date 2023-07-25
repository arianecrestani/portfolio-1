import { collection, getDocs } from "firebase/firestore";
import { db } from "../Components";

// import { useEffect, useState } from "react";

const projects = () => {
  async function getProjects() {
    const projectsCollection = collection(db, "projects");
    const projectSnapshot = await getDocs(projectsCollection);
    const projectList = projectSnapshot.docs.map((doc) => doc.data());
    return projectList;
  }

  getProjects().then((projects) => {
    projects.forEach((project) => {
      console.log(`Name: ${project.name}`);
      console.log(`Technologies: ${project.technologies}`);
      console.log(`GitHub: ${project.github}`);
      console.log(`URL: ${project.url}`);
      console.log(`Pic: ${project.pic}`);
      console.log("---");
    });
  });

  return <div>projects</div>;
};

export default projects;
