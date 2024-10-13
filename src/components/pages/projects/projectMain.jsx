import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function ProjectMain({ togglePage }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div id="projects" className="bg-[#504945] min-h-full">
        <h1 className="px-10 md:px-28 lg:pt-28 pt-10 md:pt-20 text-3xl md:text-5xl font-bold text-[#EBDBB2]">
          Projects
        </h1>
        <div className="flex lg:flex-row flex-col px-4 md:px-36 pt-10 gap-10">
          <div className="flex gap-2 flex-col w-full">
            <div className="md:w-[520px]">
              <img src="/image2.png" />
            </div>
            <div>
              <h1 className="text-[#EBDBB2] text-xl md:text-2xl font-bold">
                {isMobile ? (
                  <a
                    href="https://github.com/ananda17gb/anandas-blog"
                    className="underline"
                    target="_blank"
                  >{`My Blog`}</a>
                ) : (
                  `My Blog`
                )}
              </h1>
              <p className="text-[#EBDBB2] text-lg md:text-xl pt-1 md:pt-4 text-justify">
                Showcases my personal blogs. Still under development! Uses
                React, Firebase Storage, and Firestore Cloud for CRUD. Future
                plans include adding user authentication and authorization.
              </p>
              <div className="pt-2 md:pt-6 max-sm:hidden md:visible">
                <a
                  href="https://github.com/ananda17gb/anandas-blog"
                  className="hover:underline hover:font-bold transition duration-100 ease-in-out text-sm md:text-base text-[#EBDBB2]"
                  target="_blank"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div>
              <h1 className="text-[#EBDBB2] text-xl md:text-2xl font-bold">
                {isMobile ? (
                  <a
                    href="https://github.com/ananda17gb/arjunachicken-foodorderapp"
                    className="underline"
                    target="_blank"
                  >{`Food Order App`}</a>
                ) : (
                  `Food Order App`
                )}
              </h1>
              <p className="text-[#EBDBB2] text-lg md:text-xl pt-1 md:pt-4 text-justify">
                Developed with Flutter for Arjuna&apos;s Chicken, as a project
                not for real. It uses Google Sheets API for menu and order
                management.
              </p>
              <div className="pt-2 md:pt-6 max-sm:hidden md:visible">
                <a
                  href="https://github.com/ananda17gb/arjunachicken-foodorderapp"
                  className="hover:underline hover:font-bold transition duration-100 ease-in-out text-sm md:text-base text-[#EBDBB2]"
                  target="_blank"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-[800px] md:w-[600px]">
              <img src="/image4.png" />
            </div>
          </div>
        </div>
        <div className="flex justify-end place-self-end pr-14 md:pr-28 lg:pt-14 py-10 md:py-20 items-center gap-4 bottom-0 inset-0">
          <button
            className="max-md:underline text-xl md:text-2xl text-[#EBDBB2]  hover:font-bold ease-in-out duration-100 hover:scale-105 flex gap-2 items-center"
            onClick={togglePage}
          >
            See More
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#EBDBB2" }} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectMain;
