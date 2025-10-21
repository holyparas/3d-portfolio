import { WobbleCard } from "../components/wobble-card";
import { GlobeWobble } from "../components/GlobeWobble";
import Frameworks from "../components/Frameworks";
import { Button } from "../components/Button";
const About = () => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText("gathanip1@gmail.com");
  };
  return (
    <div className="bg-gray-800 backdrop-blur-lg">
      <h1 className="text-5xl md:text-7xl text-yellow-300 font-bold mb-8">
        About Me
      </h1>
      <div id="about" className=" md:grid grid-cols-2 gap-4 px-2">
        <div className="py-4">
          <WobbleCard className=" bg-fuchsia-900 py-30">
            <h2 className=" text-4xl sm:text-7xl text-yellow-500">
              Paras Gathani
            </h2>
            <p className="text-base">
              With my Bachelors and Master's degree in CS, I strive to be a
              competent developer.
            </p>
          </WobbleCard>
        </div>

        <div className="py-4">
          <WobbleCard className="bg-fuchsia-900  py-35">
            <h2 className=" text-4xl sm:text-7xl text-yellow-500">
              Tech Stack
            </h2>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[40%] md:scale-125">
              <Frameworks />
            </div>
          </WobbleCard>
        </div>

        <div className="">
          <WobbleCard className="bg-fuchsia-900 overflow-hidden relative">
            <h2 className=" text-4xl sm:text-7xl text-yellow-500 ">
              Time Zone
            </h2>
            <p className="">
              I'm based in India but available for remote work woldwide. With my
              fluency in English and Australian education, I'm a perfect fit for
              any firm.
            </p>
            <GlobeWobble />
          </WobbleCard>
        </div>
        <div>
          <div className="bg-sky-600 rounded-2xl p-4 inline-block">
            <p className=" text-base sm:text-xl text-black">
              Want to get in touch with me?
            </p>

            <Button onClick={handleCopy}>Copy Email Address</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
