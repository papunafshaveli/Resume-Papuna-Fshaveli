import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./Header";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import { AppContainer } from "./styles";
import { createContext, useEffect, useState } from "react";

export const ThemesContext = createContext(false);

function App() {
  const navigateToHome = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    navigateToHome("/");
  }, []);

  return (
    <ThemesContext.Provider value={isDarkMode}>
      <AppContainer isDarkMode={isDarkMode}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AppContainer>
    </ThemesContext.Provider>
  );
}

export default App;
