import { projectsData } from "../../data/data";
import {
  Buttons,
  ProjectContainer,
  StyledFooter,
  StyledHeader,
  StyledMain,
} from "./styles";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Project = () => {
  return (
    <>
      {projectsData.map((item) => (
        <ProjectContainer key={item.id}>
          <StyledHeader>
            <LazyLoadImage
              src={item.img}
              width="100%"
              height="250px"
              effect="blur"
              delayMethod="debounce"
              delayTime={100}
            />
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
