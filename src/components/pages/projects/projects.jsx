import { useEffect, useState } from "react";
import ProjectMain from "./projectMain";
import ProjectSub from "./projectSub";

function Projects() {
  const [showSubPage, setShowSubPage] = useState(false);

  const togglePage = () => {
    setShowSubPage(!showSubPage);
  };

  useEffect(() => {
    if (showSubPage) {
      const element = document.getElementById("projects");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [showSubPage]);

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
