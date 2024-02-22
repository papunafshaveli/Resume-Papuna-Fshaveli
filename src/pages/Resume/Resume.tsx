import { TypeAnimation } from "react-type-animation";

import { ComingSoon, ResumeContainer } from "./styles";

const Resume = () => {
  return (
    <ResumeContainer
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <ComingSoon>
        <TypeAnimation
          sequence={["Coming Soon...", 1000, "❤️", 1000]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "3rem",
            display: "inline-block",
            color: "GrayText",
          }}
          repeat={Infinity}
        />
      </ComingSoon>
    </ResumeContainer>
  );
};

export default Resume;
