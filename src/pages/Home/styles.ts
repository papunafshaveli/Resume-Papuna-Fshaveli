import styled from "styled-components";
import { motion } from "framer-motion";

export const HomePageContainer = styled(motion.div)`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Introduction = styled.h1<{ themes: boolean }>`
  color: ${(props) => (props.themes ? "white" : "black")};
  font-size: 3.4rem;

  text-align: center;
`;

export const IntroAnimation = styled.div``;

export const Contact = styled.div`
  display: flex;
  gap: 30px;
`;
