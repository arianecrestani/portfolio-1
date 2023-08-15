import { useState } from "react";

type ProjectProps = {
  name: string;
  key: string; // NOTE: 'key' is a reserved prop in React, you might want to avoid using it directly
  github: string;
  pic: string;
  tech: string;
  url: string;
};

const Project: React.FC<ProjectProps> = ({ name, github, pic, tech, url }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-div"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="test">
        <img
          className={hovered ? "project-pic-div hovered" : "project-pic-div"}
          style={{ width: "100%" }}
          src={pic}
          alt="project-screenshot"
        />
        <div className="links">
          <a href={github}>Github</a>
          <a href={url}>Deployment</a>
        </div>
      </div>
      <h3>{name}</h3>
      <p>Technologies:</p>
      <p>{tech}</p>

      {/* {hovered && (
        <>
          <a href={github}>link on hovered</a>
        </>
      )} */}
    </div>
  );
};

export default Project;
