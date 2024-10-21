import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex rounded-lg md:px-10 p-8 bg-[#394867] bg-opacity-20 border-[#394867] border-opacity-10 md:w-[620px] max-md:h-full">
      <div className="flex flex-col py-8 gap-4">
        <div className="flex flex-col overflow-auto gap-2">
          <h1 className="text-[#f1f6f9] text-xl md:text-2xl font-bold">
            {project.projectName}
          </h1>
          <p className="text-[#9ba4b5] text-lg md:text-xl text-justify">
            {project.projectDescription}
          </p>
        </div>
        <img
          src={`${project.projectImage}`}
          className="md:w-[500px] md:h-[280px] w-[400px]"
        />
        <div className="flex flex-col overflow-auto gap-2">
          <p className="text-[#9ba4b5] text-lg md:text-xl text-justify">
            {project.projectSG}
          </p>
          <p className="text-[#9ba4b5] text-lg md:text-xl text-justify">
            {project.projectTechs}
          </p>
        </div>
        <div className="block">
          <Link
            to={`/project/${project.projectName}`}
            className="hover:underline hover:font-bold transition duration-100 ease-in-out text-sm md:text-base text-[#f1f6f9]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
