import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";

import { AppContainer } from "./styles";
import { createContext, useEffect, useState } from "react";
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

export const ThemesContext = createContext(false);

function App() {
  const navigateToHome = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    navigateToHome("/");
  }, []);

  return (
    <ThemesContext.Provider value={isDarkMode}>
      <AppContainer $isDarkMode={isDarkMode}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <AnimatedRoutes />
      </AppContainer>
    </ThemesContext.Provider>
  );
}

export default App;
