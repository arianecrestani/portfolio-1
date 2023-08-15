import "./App.css";
import Navbar from "./Components/Navbar";
import background from "../src/assets/background.mp4";
import AboutMe from "./Components/AboutMe";
import { db } from "../src/Components/NewFBconfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Project from "./Components/Project";

type Pro = {
  id: string;
  name: string;
  technologies: string;
  github: string;
  url: string;
  pic: string;
};

function App() {
  const [fetchedProjects, setFetchedProjects] = useState<Pro[]>([]);

  const getAllProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const pArray = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Pro)
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

  console.log(fetchedProjects);
  return (
    <>
      <Navbar />
      <section id="section1">
        <video src={background} playsInline autoPlay muted loop></video>
      </section>
      <section id="section2">
        <AboutMe />
      </section>
      <section id="section3">
        <div className="flex-container">
          {fetchedProjects.map((project) => {
            return (
              <Project
                key={project.id}
                name={project.name}
                github={project.github}
                pic={project.pic}
                tech={project.technologies}
                url={project.url}
              />
            );
          })}
        </div>
      </section>
      <section id="section4" style={{ backgroundColor: "blue" }}>
        Contact
      </section>
    </>
  );
}

export default App;
