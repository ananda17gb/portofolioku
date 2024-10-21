import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [isOpenBar, setIsOpenBar] = useState(false);

  const toggleBar = () => {
    setIsOpenBar(!isOpenBar);
  };

  return (
    <>
      <nav className="flex items-center h-20 bg-[#394867] fixed top-0 w-full px-4 md:px-8 z-20">
        <div className="md:hidden flex p-4">
          <button onClick={toggleBar} className="text-[#f1f6f9]">
            <FontAwesomeIcon icon={isOpenBar ? faTimes : faBars} size="xl" />
          </button>
        </div>
        <div
          className={`absolute top-20 left-0 w-screen bg-[#394867]  md:static md:flex md:justify-center md:gap-4 md:items-center ${
            isOpenBar ? "flex flex-col items-start pl-10" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-4 bg-[#394867] text-[#f1f6f9] md:text-xl">
            <li>
              <a
                href="#aboutme"
                className="block p-2 hover:font-bold hover:underline ease-in-out duration-100"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block p-2 hover:font-bold hover:underline ease-in-out duration-100"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#techstack"
                className="block p-2 hover:font-bold hover:underline ease-in-out duration-100"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="block p-2 hover:font-bold hover:underline ease-in-out duration-100"
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
