import AchievementsCard from "./achievementsCard";
import { achievementsData } from "./achievementsData";

function Achievements() {
  return (
    <>
      <div id="achievements" className="bg-[#212a3e] min-h-full">
        <h1 className="text-center lg:pt-28 md:pt-20 pt-10 text-3xl md:text-5xl font-bold text-[#f1f6f9]">
          Achievements
        </h1>
        <div className="flex flex-wrap gap-4 justify-center md:px-52 py-10 md:py-28">
          {achievementsData.map((achievement, index) => (
            <AchievementsCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Achievements;
