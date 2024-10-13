const ProjectCard = ({ project }) => {
  return (
    <>
      <div
        className={` flex  ${
          project.projectType === "Mobile"
            ? "max-sm:px-10 max-md:pl-[400px]"
            : "md:pl-24 px-10"
        }`}
      >
        <div className="flex max-lg:flex-col pt-8 lg:gap-10 gap-6">
          <img
            src={`${project.projectImage}`}
            className={` ${
              project.projectType === "Mobile" ||
              project.projectImage === "/noimage.JPG"
                ? "w-64 lg:w-80"
                : "w-[700px]"
            }`}
          />
          <div className="flex flex-col gap-4 text-[#EBDBB2] overflow-auto max-w-96">
            <h1 className="text-[#EBDBB2] text-xl md:text-2xl font-bold">
              {project.projectName}
            </h1>
            <p className="text-[#EBDBB2] text-lg md:text-xl pt-1 md:pt-4 text-justify">
              {project.projectDescription}
            </p>
            <a
              href={project.projectUrl}
              className="hover:underline hover:font-bold transition duration-100 ease-in-out text-sm md:text-base"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
