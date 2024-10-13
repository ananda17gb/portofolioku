import { useState } from "react";
import ProjectMain from "./projectMain";
import ProjectSub from "./projectSub";

function Projects() {
  const [showSubPage, setShowSubPage] = useState(false);

  const togglePage = () => {
    setShowSubPage(!showSubPage);
  };

  return (
    <>
      {showSubPage ? (
        <ProjectSub togglePage={togglePage} />
      ) : (
        <ProjectMain togglePage={togglePage} />
      )}
    </>
  );
}

export default Projects;
