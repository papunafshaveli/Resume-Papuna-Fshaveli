import styled from "styled-components";
import profileImage from "../../images/profile.png";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 30px;
  max-width: 800px;
`;

export const Info = styled.div<{ themes: boolean }>`
  ul {
    list-style-type: none;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  b {
    font-size: 1.8rem;
    color: ${(props) => (props.themes ? "beige" : "black")};
  }
  li {
    font-size: 1.6rem;
    line-height: 30px;
    color: ${(props) => (props.themes ? "white" : "black")};
  }
  p {
    margin: 20px 0;
    font-size: 1.4rem;
    color: ${(props) => (props.themes ? "white" : "black")};
  }
`;

export const ProfileImageContainer = styled.div`
  width: 300px;
  height: 300px;

  background-image: url(${profileImage});
  background-size: contain;
  background-repeat: no-repeat;

  border: 1px solid beige;

  border-radius: 8px;
`;

export const SocMedia = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 20px;
  img {
    width: 70px;

    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;
