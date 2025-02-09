import Banner from "./Banner";
import Skills from "./Skills";
import Description from "./Description";
import Certificates from "./Certificates";
import Carrier from "./Carrier";
import Education from "./Education";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <>
      <section id="About" className="flex flex-col items-center p-auto container mx-auto px-4">
        <Banner />
        <div className="flex w-full justify-between">
          <Skills />
          <Description />
          <SocialMedia />
        </div>
        <div className="flex w-full justify-center my-1">
          <Education />
          <Carrier />
          <Certificates />
        </div>
      </section>
    </>
  );
};

export default About;
