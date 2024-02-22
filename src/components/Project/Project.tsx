import { projectsData } from "../../data/data";
import {
  Buttons,
  ProjectContainer,
  StyledFooter,
  StyledHeader,
  StyledMain,
} from "./styles";

const Project = () => {
  return (
    <>
      {projectsData.map((item) => (
        <ProjectContainer key={item.id}>
          <StyledHeader>
            <img src={item.img} />
          </StyledHeader>
          <StyledMain>
            <h1>{item.head}</h1>
            <p>{item.description}</p>
            <Buttons>
              <button
                onClick={() => {
                  window.open(item.github, "_blank");
                }}
              >
                GithHub
              </button>
              <button
                onClick={() => {
                  window.open(item.liveLink, "_blank");
                }}
              >
                Live
              </button>
            </Buttons>
          </StyledMain>
          <StyledFooter>
            <div>
              <img src={item.languages[0]}></img>
            </div>
            <div>
              <img src={item.languages[1]}></img>
            </div>
          </StyledFooter>
        </ProjectContainer>
      ))}
    </>
  );
};

export default Project;
