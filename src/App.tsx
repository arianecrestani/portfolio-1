import "./App.css";
import Projects from "../src/Components/Projects";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <a
        style={{
          backgroundColor: "purple",
          display: "block",
          height: "25px",
        }}
        href="#section4"
      >
        link to section 4
      </a> */}
      <Navbar />
      <h1>this is my portfolio</h1>
      <Projects />

      <hr />
      <section
        id="section1"
        style={{ backgroundColor: "gray", height: "100vh" }}
      >
        first paragraph
      </section>
      <section
        id="section2"
        style={{ backgroundColor: "yellow", height: "100vh" }}
      >
        second paragraph
      </section>
      <section
        id="section3"
        style={{ backgroundColor: "lightgreen", height: "100vh" }}
      >
        third paragraph
      </section>
      <section
        id="section4"
        style={{ backgroundColor: "blue", height: "100vh" }}
      >
        forth paragraph
      </section>
      <footer></footer>
    </>
  );
}

export default App;
