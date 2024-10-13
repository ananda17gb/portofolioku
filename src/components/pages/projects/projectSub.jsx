import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ProjectCard from "./projectCard";
import { projectData } from "./projectData";

function ProjectSub({ togglePage }) {
  const [selectType, setSelectType] = useState("Website");

  const filteredProjects =
    selectType === "All"
      ? projectData
      : projectData.filter((project) => project.projectType === selectType);

  return (
    <>
      <div id="projects" className="bg-[#504945] min-h-full">
        <div className="flex justify-around">
          <div className="flex flex-col w-screen">
            <div className="flex items-center justify-between px-10 md:px-28 lg:pt-28 pt-10 md:pt-20">
              <div className="flex items-center gap-10">
                <button
                  onClick={togglePage}
                  className="hover:font-bold ease-in-out duration-100 hover:scale-105"
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="2xl"
                    color="#EBDBB2"
                  />
                </button>
                <h1 className=" text-3xl md:text-5xl font-bold text-[#EBDBB2]">
                  Projects
                </h1>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 md:gap-40 py-8 justify-center items-center">
              <div className="max-sm:order-2">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
              <div className="md:max-h-full flex items-center pr-10 max-sm:order-1">
                <ul className="flex md:flex-col gap-2 bg-[#282828] p-4 rounded-lg">
                  {["Website", "Mobile", "Other"].map((category) => (
                    <li key={category}>
                      <button
                        className={`text-[#EBDBB2] py-2 px-4 rounded ${
                          selectType === category
                            ? "bg-[#d5c4a1] font-bold"
                            : "bg-[#282828] hover:bg-[#3c3836] transition"
                        }`}
                        onClick={() => setSelectType(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSub;
