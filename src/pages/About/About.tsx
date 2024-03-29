import {
  AboutContainer,
  Info,
  ProfileImageContainer,
  SocMedia,
} from "./styles";
import profilePic from "../../images/profile.png";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import yt from "../../images/yt.png";
import { useContext } from "react";

import { ThemesContext } from "../../components/App/App";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

  const themes = useContext(ThemesContext);

  return (
    <AboutContainer
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Info $themes={themes}>
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
      <ProfileImageContainer>
        <LazyLoadImage
          src={profilePic}
          width="100%"
          effect="blur"
          delayMethod="debounce"
          delayTime={300}
        />
      </ProfileImageContainer>
      <SocMedia>
        <LazyLoadImage
          src={fb}
          width="100%"
          height="70px"
          effect="blur"
          delayMethod="debounce"
          delayTime={300}
          onClick={visitFB}
        />

        <LazyLoadImage
          src={insta}
          width="100%"
          height="70px"
          effect="blur"
          delayMethod="debounce"
          delayTime={300}
          onClick={visitInsta}
        />

        <LazyLoadImage
          src={yt}
          width="100%"
          height="70px"
          effect="blur"
          delayMethod="debounce"
          delayTime={300}
          onClick={visitYT}
        />
      </SocMedia>
    </AboutContainer>
  );
};

export default About;
