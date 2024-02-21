import styled from "styled-components";
import Project from "../../components/Project";

const Projects = () => {
  return (
    <ProjectsPageContainer>
      <MainText>Projects</MainText>
      <ProjectWrapper>
        <Project />
      </ProjectWrapper>
    </ProjectsPageContainer>
  );
};

export default Projects;

const ProjectsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 800px;
`;

const MainText = styled.h1`
  font-size: 2.8rem;
  padding: 60px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
