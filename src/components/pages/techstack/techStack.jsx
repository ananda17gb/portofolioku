import { useState, useEffect } from "react";
import TechStackMain from "./techStackMain";
import TechStackSub from "./techStackSub";

function TechStack() {
  const [showSubPage, setShowSubPage] = useState(false);

  const togglePage = () => {
    setShowSubPage(!showSubPage);
  };
  useEffect(() => {
    if (showSubPage) {
      const element = document.getElementById("techstack");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "auto" });
        }, 200);
      }
    }
  }, [showSubPage]);

  return (
    <>
      {showSubPage ? (
        <TechStackSub togglePage={togglePage} />
      ) : (
        <TechStackMain togglePage={togglePage} />
      )}
    </>
  );
}

export default TechStack;
