import { useContext } from "react";
import Project from "../../components/Project/Project";
import { MainText, ProjectWrapper, ProjectsPageContainer } from "./styles";
import { ThemesContext } from "../../components/App/App";

const Projects = () => {
  const themes = useContext(ThemesContext);
  return (
    <ProjectsPageContainer
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <MainText themes={themes}>Projects</MainText>
      <ProjectWrapper>
        <Project />
      </ProjectWrapper>
    </ProjectsPageContainer>
  );
};

export default Projects;
