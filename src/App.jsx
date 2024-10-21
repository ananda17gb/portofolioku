import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/element/navbar";
import AboutMe from "./components/pages/aboutme/aboutMe";
import Projects from "./components/pages/projects/projects";
import TechStack from "./components/pages/techstack/techStack";
import Achievements from "./components/pages/achievement/achievements";
import ProjectDetails from "./components/pages/projects/projectDetails"; // Import your ProjectDetails component
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-ubuntu">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <AboutMe />
                <Projects />
                <TechStack />
                <Achievements />
              </>
            }
          />
          <Route path="/project/:title" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
