// import "./About.css";
import profile from "../profile.jpg";
import "./AboutMe.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1>
          <span className="about__header-num">02.</span>About
        </h1>
        <div className="header-line"></div>
      </div>
      <div className="about__aboutRow">
        <div className="about__body">
          <p>Hey! I'm Doron Breska.</p>
          <br />
          <p>
            As a junior full stack web developer, I merge my passion for design
            and coding to create cohesive web solutions. <br />A graduate from
            Code Academy Berlin, I am adept at transforming ideas into
            functional and visually appealing applications. <br />
            Beyond coding, I value collaboration and continuous learning,
            ensuring every project benefits from the latest in web development
            innovations.
          </p>
          <br />

          <p>Here are the technologies I've been working with:</p>
          <br />
          <div className="about__body-skills">
            <ul className="about__body-skills-1">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git &#38; Github</li>
            </ul>
            <ul className="about__body-skills-2">
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
        <div className="about__image">
          <div className="about__image-imageBorder"></div>
          <div className="about__image-imageLayer"></div>
          <img src={profile} alt="Profilepic" />
        </div>
      </div>
    </div>
  );
};

export default About;
