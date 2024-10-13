import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { techStackData } from "./techStackData";

function ProjectSub({ togglePage }) {
  const [selectType, setSelectType] = useState("Website");

  const filteredProjects =
    selectType === "All"
      ? techStackData
      : techStackData.filter((project) => project.techStackType === selectType);

  return (
    <>
      <div id="techstack" className="bg-[#3C3836] h-[1008px]">
        <div className="flex justify-around">
          <div className="flex flex-col w-screen ">
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
                  Tech Stack
                </h1>
              </div>
            </div>
            <div className="flex items-center lg:gap-40 py-8 justify-between md:px-32 lg:px-96 min-h-full max-sm:flex-col">
              <div className="flex flex-wrap max-sm:order-2">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="w-1/2 lg:w-1/4 p-2">
                    <div className="flex flex-col items-center">
                      <div className="w-36 md:w-44 overflow-hidden flex items-center justify-center">
                        <img
                          src={project.techStackImage}
                          alt={project.techStackName}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <p className="text-center text-[#EBDBB2] mt-2">
                        {project.techStackName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-h-full flex items-center max-sm:order-1 ">
                <ul className="flex md:flex-col gap-2 bg-[#282828] p-4 rounded-lg">
                  {["Website", "Mobile", "Other"].map((category) => (
                    <li key={category}>
                      <button
                        className={`text-[#EBDBB2] py-2 px-4 rounded ${selectType === category
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
