import "./App.css";
import Projects from "../src/Components/Projects";
import Navbar from "./Components/Navbar";
import background from "../src/assets/background.mp4";

function App() {
  return (
    <>
      <Navbar />
      {/* <h1>this is my portfolio</h1> */}
      {/* <Projects /> */}
      {/* <hr /> */}
      <section id="section1" style={{ backgroundColor: "gray" }}>
        <video src={background} playsInline autoPlay muted loop></video>
      </section>
      <section id="section2" style={{ backgroundColor: "yellow" }}>
        second paragraph
      </section>
      <section id="section3" style={{ backgroundColor: "lightgreen" }}>
        third paragraph
      </section>
      <section id="section4" style={{ backgroundColor: "blue" }}>
        forth paragraph
      </section>
      <footer></footer>
    </>
  );
}

export default App;
