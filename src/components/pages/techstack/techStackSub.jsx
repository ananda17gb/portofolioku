import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { techStackData } from "./techStackData";

function ProjectSub({ togglePage }) {
  const [selectType, setSelectType] = useState("Website");

  const filteredProjects =
    selectType === "All"
      ? techStackData
      : techStackData.filter((project) => project.techStackType === selectType);

  return (
    <>
      <div id="techstack" className="bg-[#212a3e] h-full">
        <div className="flex justify-around">
          <div className="flex flex-col w-screen ">
            <div className="flex items-center justify-between px-10 md:px-20 lg:px-40 lg:pt-28 pt-10 md:pt-20">
              <div className="flex items-center gap-10">
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
                  Tech Stack
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-10 md:my-10 my-8 lg:my-24 md:px-28 lg:px-80">
              <div className="md:max-h-full flex items-center">
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
              <div className="flex gap-4 md:gap-10 flex-wrap justify-center">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="w-36 md:w-52 overflow-hidden flex items-center justify-center">
                      <img
                        src={`${project.techStackImage}`}
                        alt={project.techStackName}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="text-center text-[#f1f6f9] mt-2">
                      {project.techStackName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSub;
