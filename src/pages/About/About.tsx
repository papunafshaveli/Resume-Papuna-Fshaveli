import styled from "styled-components";
import {
  AboutContainer,
  Info,
  ProfileImageContainer,
  SocMedia,
} from "./styles";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import yt from "../../images/yt.png";

const About = () => {
  const visitFB = () => {
    const fbUrl = "https://www.facebook.com/papunafshaveli1/";
    window.open(fbUrl, "_blank");
  };

  const visitInsta = () => {
    const instaUrl = "https://www.instagram.com/papunart/?hl=en";
    window.open(instaUrl, "_blank");
  };

  const visitYT = () => {
    const ytUrl = "https://www.youtube.com/channel/UC8GUnP1KWNGgMZnKR7dLy-w";
    window.open(ytUrl, "_blank");
  };
  return (
    <AboutContainer>
      <Info>
        <ul>
          <li>
            <b>Name:</b> Papuna Fshaveli;
          </li>
          <li>
            <b>Age:</b> 34
          </li>
          <li>
            <b>Current Occupation:</b> Frontend Web Developer at Bitnet Crypto
            Company;
          </li>
          <li>
            <b>Transition Period:</b> Transitioned to programming approximately
            1.5 years ago
          </li>
          <li>
            <b>Hobbies:</b> Playing guitar, singing Georgian songs, photography,
            and traveling
          </li>
        </ul>
        <p>
          Papuna Fshaveli, a multifaceted individual whose journey unfolds like
          a captivating melody. Formerly orchestrating the human resources
          domain at the heart of Georgia's legal system, Papuna took a daring
          leap into the boundless realms of programming. With the winds of
          change guiding him, he now crafts digital landscapes as a Frontend Web
          Developer at Bitnet Crypto Company. Beyond the screen, Papuna's soul
          finds solace in the strum of guitar strings, echoing the melodies of
          his homeland. His lens captures moments suspended in time, while his
          wanderlust spirit dances across undiscovered horizons. In the tapestry
          of his existence, Papuna weaves together the threads of technology,
          music, and adventure, painting a portrait of boundless curiosity and
          ever-evolving passion.
        </p>
      </Info>
      <ProfileImageContainer />
      <SocMedia>
        <img src={fb} onClick={visitFB} />
        <img src={insta} onClick={visitInsta} />
        <img src={yt} onClick={visitYT} />
      </SocMedia>
    </AboutContainer>
  );
};

export default About;
