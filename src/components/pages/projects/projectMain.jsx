import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectData } from "./projectData";
import ProjectCard from "./projectCard";
import ProjectDetails from "./projectDetails"; // Import ProjectDetails

function ProjectMain({ togglePage }) {
  const mainProjects = [projectData[3], projectData[2]];
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project

  const handleLearnMore = (project) => {
    setSelectedProject(project); // Set selected project
  };

  return (
    <>
      {!selectedProject ? (
        <>
          <div id="projects" className="bg-[#212a3e] min-h-full">
            <h1 className="px-10 md:px-16 lg:px-56 lg:pt-28 pt-10 md:pt-20 text-3xl md:text-5xl font-bold text-[#f1f6f9]">
              Projects
            </h1>
            <div className="flex lg:flex-row flex-col mx-4 lg:px-4 justify-center pt-4 md:pt-28 gap-10">
              <div className="flex gap-2 md:gap-10 flex-wrap justify-center">
                {mainProjects.map((project, index) => (
                  <div key={index}>
                    <ProjectCard
                      project={project}
                      onLearnMore={() => handleLearnMore(project)} // Pass the handler
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end place-self-end pr-14 md:pr-20 lg:pr-56 lg:pt-36 py-10 md:py-20 items-center gap-4 bottom-0 inset-0">
              <button
                className="max-md:underline text-xl md:text-2xl text-[#f1f6f9] hover:font-bold ease-in-out duration-100 hover:scale-105 flex gap-2 items-center"
                onClick={togglePage}
              >
                See More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#f1f6f9" }}
                />
              </button>
            </div>
          </div>
        </>
      ) : (
        <ProjectDetails project={selectedProject} /> // Render project details
      )}
    </>
  );
}

export default ProjectMain;
