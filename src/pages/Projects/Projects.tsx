import Project from "../../components/Project";
import { MainText, ProjectWrapper, ProjectsPageContainer } from "./styles";

const Projects = () => {
  return (
    <ProjectsPageContainer
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <MainText>Projects</MainText>
      <ProjectWrapper>
        <Project />
      </ProjectWrapper>
    </ProjectsPageContainer>
  );
};

export default Projects;
