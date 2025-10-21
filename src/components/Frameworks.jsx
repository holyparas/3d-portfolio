import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  "html5.svg",
  "css3.svg",
  "javascript.svg",
  "react.svg",
  "tailwindcss.svg",
  "threejs.svg",
  "git.svg",
  "java.svg",
  "sqlite.svg",
];

const Frameworks = () => {
  return (
    <div className="relative flex h-[10rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={50}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

export default Frameworks;
