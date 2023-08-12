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
};

const Project: React.FC<ProjectProps> = ({ name, github }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{github}</p>
    </div>
  );
};

export default Project;
