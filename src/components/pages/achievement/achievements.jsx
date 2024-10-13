function Achievements() {
  return (
    <>
      <div id="achievements" className="bg-[#504945] min-h-full">
        <h1 className="text-center lg:pt-28 md:pt-20 pt-10 text-3xl md:text-5xl font-bold text-[#EBDBB2]">
          Achievements
        </h1>
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 md:grid-rows-3 gap-4 py-24 px-4 md:px-10">
          <div className="flex justify-center items-center p-4">
            <div className="">
              <img src="../../public/image 5.png" />
            </div>
          </div>
          <h1 className="text-[#EBDBB2] text-xl md:text-2xl font-bold row-start-2 col-start-1 md:row-start-1 md:col-start-2 lg:row-start-2 lg:col-start-1 p-2">
            Accepted at Telkom University (International Class)
          </h1>
          <p className="text-[#EBDBB2] text-lg md:text-xl pt-16 lg:pt-20 md:pt-20 row-start-2 col-start-1 md:row-start-1 md:col-start-2 lg:row-start-2 lg:col-start-1 p-2 text-justify">
            I was accepted twice, if I’m not mistaken, through the report card
            path. At first, I was hesitant to take it, even though I had already
            completed the EPRT test. However, I joined through the same path the
            second time and, thankfully, did not have to retake the EPRT and was
            accepted into the International class as an Informatics student.
          </p>
          <div className="flex justify-center items-center p-4">
            <div className="">
              <img src="../../public/image 6.png" />
            </div>
          </div>
          <h1 className="text-[#EBDBB2] text-xl md:text-2xl font-bold row-start-4 col-start-1 md:row-start-2 md:col-start-2 lg:row-start-2 lg:col-start-2 p-2">
            3.98 GPA
          </h1>
          <p className="text-[#EBDBB2] text-lg md:text-xl lg:pt-20 pt-8 row-start-4 col-start-1 md:row-start-2 md:col-start-2 lg:row-start-2 lg:col-start-2 p-2 text-justify">
            As of September 10, 2024, I have a 3.98 GPA. This was primarily
            impacted by the GLOW program, which didn't yield the best results
            for me. However, I'm deeply grateful to my lecturers, friends, and
            God for their support in helping me achieve this.
          </p>
          <div className="flex justify-center items-center p-4">
            <div className="">
              <img src="../../public/MySQL Logo.png" />
            </div>
          </div>
          <h1 className="text-[#EBDBB2] text-xl md:text-2xl font-bold row-start-6 col-start-1 md:row-start-3 md:col-start-2 lg:row-start-2 lg:col-start-3 p-2">
            Database Modeling Lecturer Assistant
          </h1>
          <p className="text-[#EBDBB2] text-lg md:text-xl pt-16 lg:pt-20 md:pt-12 row-start-6 col-start-1 md:row-start-3 md:col-start-2 lg:row-start-2 lg:col-start-3 p-2 ">
            Getting a chance to teach two classes as a lecturer asisstant on
            database modelling course for 4 weeks on how to use MySQL or more
            specifically SQL queries (DDL and DML).
          </p>
        </div>
      </div>
    </>
  );
}

export default Achievements;
