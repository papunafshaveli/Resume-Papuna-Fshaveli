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

const Skills = () => {
  return (
    <SkillsContainer>
      <Description>
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
