import js from "../../images/js.png";
import ts from "../../images/ts.png";
import graph from "../../images/graph.png";

import react from "../../images/react.png";
import node from "../../images/node.png";

import git from "../../images/git.png";
import {
  Description,
  Frameworks,
  Languages,
  SkillsContainer,
  Tools,
} from "./styles";
import { useContext } from "react";
import { ThemesContext } from "../../components/App";

const Skills = () => {
  const themes = useContext(ThemesContext);
  return (
    <SkillsContainer
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Description themes={themes}>
        I love to learn new things and experiment with new technologies. These
        are some of the major languages, technologies, tools and platforms I
        have worked with:
      </Description>
      <Languages>
        <img src={js} />
        <img src={ts} />
        <img src={graph} />
      </Languages>
      <Frameworks>
        <img src={react} />
        <img src={node} />
      </Frameworks>
      <Tools>
        <img src={git} />
      </Tools>
    </SkillsContainer>
  );
};

export default Skills;
