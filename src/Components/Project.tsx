// type Pro = {
//   id: string;
//   name: string;
//   technologies: string;
//   github: string;
//   url: string;
//   pic: string;
// };

type ProjectProps = {
  name: string;
  key: string; // NOTE: 'key' is a reserved prop in React, you might want to avoid using it directly
  github: string;
  pic: string;
  tech: string;
  url: string;
};

const Project: React.FC<ProjectProps> = ({ name, github, pic, tech, url }) => {
  return (
    <div className="project-div">
      <p>{name}</p>
      <p>{github}</p>
      <p>
        <img style={{ width: "200px" }} src={pic} alt="project-screenshot" />
      </p>
      <p>{tech}</p>
      <p>{url}</p>
    </div>
  );
};

export default Project;
