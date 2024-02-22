import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  max-width: 800px;

  margin: 70px 0;

  img {
    width: 100px;
  }
`;

export const Description = styled.h3`
  text-align: center;
  font-size: 1.8rem;
`;

export const Languages = styled.div``;
export const Frameworks = styled.div``;
export const Tools = styled.div``;
