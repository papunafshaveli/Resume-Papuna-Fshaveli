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

const Home = () => {
  const visitLinkedin = () => {
    const linkedinURL =
      "https://www.linkedin.com/in/papuna-machurishvili-722165a2/";
    window.open(linkedinURL, "_blank");
  };

  const visitGithub = () => {
    const linkedinURL = "https://github.com/papunafshaveli";
    window.open(linkedinURL, "_blank");
  };

  const sendEmail = () => {
    window.location.href = "mailto:papunafshaveli@gmail.com";
  };
  return (
    <HomePageContainer>
      <Introduction>My Name is Papuna Fshaveli</Introduction>
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
          style={{ fontSize: "3rem", display: "inline-block" }}
          repeat={Infinity}
        />
      </IntroAnimation>
      <Contact>
        <FaLinkedin size={40} onClick={visitLinkedin} />
        <FaGithub size={40} onClick={visitGithub} />
        <CiMail size={40} onClick={sendEmail} />
      </Contact>
    </HomePageContainer>
  );
};

export default Home;
