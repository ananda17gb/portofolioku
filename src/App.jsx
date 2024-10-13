import Navbar from "./components/element/navbar";
import AboutMe from "./components/pages/aboutme/aboutMe";
import Projects from "./components/pages/projects/projects";
import TechStack from "./components/pages/techstack/techStack";
import Achievements from "./components/pages/achievement/achievements";

function App() {
  return (
    <>
      <div className="font-ubuntu">
        <Navbar />
        <AboutMe />
        <Projects />
        <TechStack />
        <Achievements />
      </div>
    </>
  );
}

export default App;
