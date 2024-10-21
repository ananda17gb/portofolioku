import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ProjectCard from "./projectCard";
import { projectData } from "./projectData";
import ProjectDetails from "./projectDetails"; // Import ProjectDetails

function ProjectSub({ togglePage }) {
  const [selectType, setSelectType] = useState("Website");
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project

  const filteredProjects =
    selectType === "All"
      ? projectData
      : projectData.filter((project) => project.projectType === selectType);

  const handleLearnMore = (project) => {
    setSelectedProject(project); // Set selected project
  };

  return (
    <>
      {!selectedProject ? (
        <div id="projects" className="bg-[#212a3e] min-h-full">
          <div className="flex justify-around">
            <div className="flex flex-col w-screen">
              <div className="flex items-center justify-between px-10 md:px-20 lg:px-40 lg:pt-28 pt-10 md:pt-20">
                <div className="flex items-center gap-8">
                  <button
                    onClick={togglePage}
                    className="hover:font-bold ease-in-out duration-100 hover:scale-105"
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="2xl"
                      color="#f1f6f9"
                    />
                  </button>
                  <h1 className=" text-3xl md:text-5xl font-bold text-[#f1f6f9]">
                    Projects
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 md:gap-10 md:my-10 my-8 lg:my-24 md:px-28 lg:px-80">
                <div className="max-sm:mx-10 md:max-h-full flex items-center">
                  <ul className="flex gap-2 bg-[#394867] p-4 rounded-lg">
                    {["Website", "Mobile", "Other"].map((category) => (
                      <li key={category}>
                        <button
                          className={`text-[#f1f6f9] py-2 px-4 rounded ${
                            selectType === category
                              ? "bg-[#9ba4b5] font-bold"
                              : "bg-[#394867] bg-opacity-20 hover:bg-[#212a3e] transition"
                          }`}
                          onClick={() => setSelectType(category)}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
                  {filteredProjects.map((project, index) => (
                    <div key={index}>
                      <ProjectCard
                        project={project}
                        onLearnMore={() => handleLearnMore(project)} // Pass the handler
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProjectDetails project={selectedProject} /> // Render project details
      )}
    </>
  );
}

export default ProjectSub;
