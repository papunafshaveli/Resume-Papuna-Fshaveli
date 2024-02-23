import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {
  Contact,
  HomePageContainer,
  IntroAnimation,
  Introduction,
} from "./styles";
import { useContext } from "react";
import { ThemesContext } from "../../components/App/App";

const Home = () => {
  const visitLinkedin = () => {
    const linkedinURL =
      "https://www.linkedin.com/in/papuna-machurishvili-722165a2/";
    window.open(linkedinURL, "_blank");
  };

  const visitGithub = () => {
    const githubUrl = "https://github.com/papunafshaveli";
    window.open(githubUrl, "_blank");
  };

  const sendEmail = () => {
    window.location.href = "mailto:papunafshaveli@gmail.com";
  };
  const themes = useContext(ThemesContext);
  return (
    <HomePageContainer
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Introduction $themes={themes}>My Name is Papuna Fshaveli</Introduction>
      <IntroAnimation>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I am a Web-developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I am a Freelancer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "3rem",
            display: "inline-block",
            color: "GrayText",
          }}
          repeat={Infinity}
        />
      </IntroAnimation>
      <Contact>
        <FaLinkedin
          size={50}
          onClick={visitLinkedin}
          style={{ cursor: "pointer" }}
        />
        <FaGithub
          size={50}
          onClick={visitGithub}
          style={{ cursor: "pointer" }}
        />
        <CiMail size={50} onClick={sendEmail} style={{ cursor: "pointer" }} />
      </Contact>
    </HomePageContainer>
  );
};

export default Home;
