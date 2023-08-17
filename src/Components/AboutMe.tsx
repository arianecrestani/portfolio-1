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
          <p>
            Hey! I'm Ariane Crestani, a frontend web developer based in Berlin.
          </p>
          <br />
          <p>
            I enjoy creating websites or anything in between. My goal is always
            to build products that provide beautiful UI and performant
            experiences. I love to have new challenges and learn something new.
            The IT fields realize my wish to keep going to challenge myself.
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
              <li>GraphQL</li>
              <li>Next.js</li>
            </ul>
            <ul className="about__body-skills-2">
              <li>React</li>
              <li>Node.js</li>
              <li>Typescript</li>
              <li>Firebase</li>
              <li>Mongo</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
        <div className="about__image">
          <div className="about__image-imageBorder"></div>
          <div className="about__image-imageLayer"></div>
          <img src={profile} alt="Ariane Crestani" />
        </div>
      </div>
    </div>
  );
};

export default About;
