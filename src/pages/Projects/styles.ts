import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsPageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 800px;
  padding-bottom: 70px;
`;

export const MainText = styled.h1`
  font-size: 2.8rem;
  padding: 60px;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
