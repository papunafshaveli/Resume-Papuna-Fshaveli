import countriesImg from "../images/countries.png";
import shopImg from "../images/shop.png";
import todoImg from "../images/todo.png";
import travelImg from "../images/travel.png";
import worldImg from "../images/world.png";
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
    languages: ["TypeScript", "React"],
  },
  {
    id: 2,
    img: shopImg,
    head: "Where in the World?",
    description:
      "This React-based web application enables users to explore information about countries. You can search for specific countries, view details, and filter them based on regions.",
    github: "https://github.com/papunafshaveli/Countries",
    liveLink: "https://countries-delta-puce.vercel.app/",
    languages: ["TypeScript", "React"],
  },
  {
    id: 3,
    img: todoImg,
    head: "Where in the World?",
    description:
      "This React-based web application enables users to explore information about countries. You can search for specific countries, view details, and filter them based on regions.",
    github: "https://github.com/papunafshaveli/Countries",
    liveLink: "https://countries-delta-puce.vercel.app/",
    languages: ["TypeScript", "React"],
  },
  {
    id: 4,
    img: worldImg,
    head: "Where in the World?",
    description:
      "This React-based web application enables users to explore information about countries. You can search for specific countries, view details, and filter them based on regions.",
    github: "https://github.com/papunafshaveli/Countries",
    liveLink: "https://countries-delta-puce.vercel.app/",
    languages: ["TypeScript", "React"],
  },
  {
    id: 5,
    img: travelImg,
    head: "Where in the World?",
    description:
      "This React-based web application enables users to explore information about countries. You can search for specific countries, view details, and filter them based on regions.",
    github: "https://github.com/papunafshaveli/Countries",
    liveLink: "https://countries-delta-puce.vercel.app/",
    languages: ["TypeScript", "React"],
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
              <b>{item.languages[0]}</b>
            </div>
            <div>
              <b>{item.languages[1]}</b>
            </div>
          </StyledFooter>
        </ProjectContainer>
      ))}
    </>
  );
};

export default Project;
