import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectDetailsData } from "./projectDetailsData";
import { useState, useEffect } from "react";

const ProjectDetails = () => {
  const [isNote, setIsNote] = useState(null);
  const [isDeployLink, setIsDeployLink] = useState(null);
  const [isGithubLink, setIsGithubLink] = useState(null);
  const { title } = useParams();
  const project = ProjectDetailsData.find((proj) => proj.title === title);

  useEffect(() => {
    if (project) {
      setIsNote(project.note && project.note !== "");
      setIsDeployLink(project.deploymentLink && project.deploymentLink !== "");
      setIsGithubLink(project.githubLink && project.githubLink !== "");
    }
  }, [project]);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="py-20 px-10 md:px-20 lg:px-96 flex flex-col justify-center bg-[#212a3e] h-full ">
      <h1 className="md:text-2xl lg:text-3xl font-bold text-[#f1f6f9] text-center">
        {project.title}
      </h1>
      <div className="flex gap-10 my-10 justify-center">
        <h1 className="text-sm md:text-lg text-[#9ba4b5]">
          Client: {project.client}
        </h1>
        <h1 className="text-sm md:text-lg text-[#9ba4b5]">
          Role: {project.role}
        </h1>
      </div>
      <div className="my-20 flex justify-center">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="flex gap-10 justify-center items-center py-4">
        {isDeployLink && (
          <a
            href={project.deploymentLink}
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:-translate-y-1 duration-100 ease-in-out hover:text-[#f1f6f9] text-[#9ba4b5]"
          >
            <p>To {project.title}</p>
          </a>
        )}
        {isGithubLink && (
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="transition-transform hover:-translate-y-1 duration-100 ease-in-out hover:text-[#f1f6f9] text-[#9ba4b5]"
            />
          </a>
        )}
      </div>
      {isNote && (
        <div className="flex justify-center text-xs md:text-sm">
          <p className="text-[#9ba4b5] text-justify py-8">{project.note}</p>
        </div>
      )}

      <div className="flex flex-col ">
        {project.sections.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold text-[#f1f6f9] pt-2">
              {section.subtitle}
            </h4>
            <p className="text-[#9ba4b5] text-justify py-8">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
