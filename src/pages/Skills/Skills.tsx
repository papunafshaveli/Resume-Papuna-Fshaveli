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
import { ThemesContext } from "../../components/App/App";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Skills = () => {
  const themes = useContext(ThemesContext);
  return (
    <SkillsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Description $themes={themes}>
        I love to learn new things and experiment with new technologies. These
        are some of the major languages, technologies, tools and platforms I
        have worked with:
      </Description>
      <Languages>
        <LazyLoadImage
          src={js}
          width="100px"
          effect="blur"
          delayMethod="debounce"
          delayTime={100}
        />
        <LazyLoadImage
          src={ts}
          width="100px"
          effect="blur"
          delayMethod="debounce"
          delayTime={100}
        />
        <LazyLoadImage
          src={graph}
          width="100px"
          effect="blur"
          delayMethod="debounce"
          delayTime={100}
        />
      </Languages>
      <Frameworks>
        <LazyLoadImage
          src={react}
          width="100px"
          effect="blur"
          delayMethod="debounce"
          delayTime={100}
        />
        <LazyLoadImage
          src={node}
          width="100px"
          effect="blur"
          delayMethod="debounce"
          delayTime={100}
        />
      </Frameworks>
      <Tools>
        <LazyLoadImage
          src={git}
          width="100px"
          effect="blur"
          delayMethod="debounce"
          delayTime={100}
        />
      </Tools>
    </SkillsContainer>
  );
};

export default Skills;
