import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function TechStackMain({ togglePage }) {
  const [isCarousel, setIsCarousel] = useState(false);

  const techStackItems = [
    { name: "CSS3", imgSrc: "/public/images/css3.png" },
    { name: "TailwindCSS", imgSrc: "/public/images/tailwindcss.png" },
    { name: "HTML5", imgSrc: "/public/images/html5.png" },
    { name: "JavaScript", imgSrc: "/public/images/javascript.png" },
    { name: "React", imgSrc: "/public/images/react.png" },
    { name: "Figma", imgSrc: "/public/images/figma.png" },
    { name: "Firebase", imgSrc: "/public/images/firebase.png" },
    { name: "Linux", imgSrc: "/public/images/linux.png" },
  ];

  useEffect(() => {
    const toggleCarousel = () => {
      setIsCarousel(window.innerWidth < 640);
    };
    toggleCarousel();
    window.addEventListener("resize", toggleCarousel);
    return () => {
      window.removeEventListener("resize", toggleCarousel);
    };
  }, []);

  return (
    <div id="techstack" className="bg-[#3C3836] min-h-full">
      <h1 className="flex justify-end px-14 md:px-28 lg:pt-28 md:pt-20 pt-10 pb-8 text-3xl md:text-5xl font-bold text-[#EBDBB2]">
        Tech Stack
      </h1>

      <div
        className={` ${
          isCarousel
            ? "relative overflow-hidden"
            : "flex flex-wrap justify-center"
        } px-4 md:px-36 lg:pt-20 py-20 lg:gap-10 md:gap-16`}
      >
        {isCarousel && (
          <div className=" absolute inset-0 flex items-center">
            <div className="w-full flex flex-nowrap animate-scroll gap-4">
              {techStackItems.concat(techStackItems).map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 md:w-60 flex justify-center flex-col"
                >
                  <div className="flex self-center">
                    <img src={item.imgSrc} alt={item.name} />
                  </div>
                  <h1 className="text-[#EBDBB2] text-center">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isCarousel &&
          techStackItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:w-auto flex justify-center flex-col"
            >
              <div className="lg:w-60 w-32 flex self-center">
                <img src={item.imgSrc} alt={item.name} />
              </div>
              <h1 className="text-[#EBDBB2] text-center">{item.name}</h1>
            </div>
          ))}
        {togglePage}
      </div>

      <div className="flex justify-end place-self-end pr-14 md:pr-28 lg:pt-14 py-10 md:py-20 items-center gap-4 bottom-0 inset-0">
        <button
          className="max-md:underline text-xl md:text-2xl text-[#EBDBB2] hover:font-bold ease-in-out duration-100 hover:scale-105 flex gap-2 items-center"
          onClick={togglePage}
        >
          See More
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#EBDBB2" }} />
        </button>
      </div>
    </div>
  );
}

export default TechStackMain;
