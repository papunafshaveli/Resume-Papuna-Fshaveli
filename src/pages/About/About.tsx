import { AboutContainer, Info, ProfileImageContainer } from "./styles";

const About = () => {
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
    </AboutContainer>
  );
};

export default About;
