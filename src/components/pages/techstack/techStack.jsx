import { useState } from "react";
import TechStackMain from "./techStackMain";
import TechStackSub from "./techStackSub";

function TechStack() {
  const [showSubPage, setShowSubPage] = useState(false);

  const togglePage = () => {
    setShowSubPage(!showSubPage);
  };

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
