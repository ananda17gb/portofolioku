function AchievementsCard({ achievement }) {
  return (
    <>
      <div className="relative w-[580px] overflow-hidden rounded-lg shadow-lg">
        <img src={achievement.image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#212a3e] opacity-90"></div>
        <div className="absolute bottom-0 inset-0 flex flex-col justify-end z-10 text-[#9ba4b5] p-4">
          <h1 className="text-xl md:text-2xl font-bold">{achievement.title}</h1>
          <p className="mt-2 text-lg md:text-xl text-justify">
            {achievement.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default AchievementsCard;
