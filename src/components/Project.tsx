import countriesImg from "../images/countries.png";
import shopImg from "../images/shop.png";
import todoImg from "../images/todo.png";
import travelImg from "../images/travel.png";
import worldImg from "../images/world.png";

import react from "../images/react.png";
import ts from "../images/ts.png";

import {
  Buttons,
  ProjectContainer,
  StyledFooter,
  StyledHeader,
  StyledMain,
} from "./styles";

const projectsData = [
  {
    id: 1,
    img: countriesImg,
    head: "Where in the World?",
    description:
      "This React-based web application enables users to explore information about countries. You can search for specific countries, view details, and filter them based on regions.",
    github: "https://github.com/papunafshaveli/Countries",
    liveLink: "https://countries-delta-puce.vercel.app/",
    languages: [react, ts],
  },
  {
    id: 2,
    img: shopImg,
    head: "Courses Store",
    description:
      "This React application allows users to explore various courses, view detailed information about each course, and switch between different currencies for pricing.",
    github: "https://github.com/papunafshaveli/Courses-store",
    liveLink: "https://courses-store-eta.vercel.app/",
    languages: [react, ts],
  },
  {
    id: 3,
    img: todoImg,
    head: "Todo Application",
    description:
      "A simple React-based Todo application with local storage support.",
    github: "https://github.com/papunafshaveli/Todo-Application",
    liveLink: "https://todo-application-delta.vercel.app/",
    languages: [react, ts],
  },
  {
    id: 4,
    img: worldImg,
    head: "Where in the World?",
    description:
      "This React-based web application enables users to explore information about countries. You can search for specific countries, view details, and filter them based on regions.",
    github: "https://github.com/papunafshaveli/Countries",
    liveLink: "https://countries-delta-puce.vercel.app/",
    languages: [react, ts],
  },
  {
    id: 5,
    img: travelImg,
    head: "WorldWise",
    description:
      "The web app is a travel tracking and adventure registration application.",
    github: "https://github.com/papunafshaveli/WorldWise",
    liveLink: "https://world-wise-seven.vercel.app/",
    languages: [react, ts],
  },
];

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
