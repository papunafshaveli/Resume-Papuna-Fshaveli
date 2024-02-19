import { Route, Routes } from "react-router-dom";

import Header from "./Header";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Education from "../pages/Education/Education";
import Experience from "../pages/Experience/Experience";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
