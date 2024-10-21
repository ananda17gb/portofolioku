import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TechStackMain({ togglePage }) {
  const techStackItems = [
    { name: "CSS3", imgSrc: "/css3.png" },
    { name: "TailwindCSS", imgSrc: "/tailwindcss.png" },
    { name: "HTML5", imgSrc: "/html5.png" },
    { name: "JavaScript", imgSrc: "/javascript.png" },
    { name: "React", imgSrc: "/react.png" },
    { name: "Figma", imgSrc: "/figma.png" },
    { name: "Firebase", imgSrc: "/firebase.png" },
    { name: "Linux", imgSrc: "/linux.png" },
  ];

  return (
    <div id="techstack" className="bg-[#212a3e] min-h-full">
      <h1 className="flex justify-end px-14 md:px-16 lg:px-56 lg:pt-28 md:pt-20 pt-10 pb-8 text-3xl md:text-5xl font-bold text-[#f1f6f9]">
        Tech Stack
      </h1>
      <div
        className="flex flex-wrap justify-center
        gap-10 mx-4 md:px-20 lg:px-80 lg:pt-20 md:py-20 lg:gap-10 md:gap-16"
      >
        {techStackItems.map((item, index) => (
          <div key={index} className=" md:w-auto flex justify-center flex-col">
            <div className="lg:w-52 w-32 flex justify-center ">
              <img src={item.imgSrc} alt={item.name} />
            </div>
            <h1 className="text-[#f1f6f9] text-center">{item.name}</h1>
          </div>
        ))}
      </div>

      <div className="flex justify-end pr-14 md:pr-16 lg:pr-56 lg:pt-14 py-10 md:py-24 items-center gap-10 bottom-0 inset-0">
        <button
          className="max-md:underline text-xl md:text-2xl text-[#f1f6f9] hover:font-bold ease-in-out duration-100 hover:scale-105 flex gap-2 items-center"
          onClick={togglePage}
        >
          See More
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f1f6f9" }} />
        </button>
      </div>
    </div>
  );
}

export default TechStackMain;
