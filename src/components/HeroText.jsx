import { FlipWords } from "./flip-words";
const HeroText = () => {
  return (
    <div
      className="ml-5 sm:relative left-24 top-24 text-3xl  pt-20 text-white"
      style={{ color: "#fff" }}
    >
      <p className="!text-white">Hi, I'm Paras</p>
      <p className="text-white">A Developer Dedicated to Crafting</p>
      <FlipWords
        words={["Secure", "Scalable", "Modern"]}
        className="text-yellow-500 text-6xl"
      />
      <p className="text-white">Web Solutions</p>
    </div>
  );
};

export default HeroText;
