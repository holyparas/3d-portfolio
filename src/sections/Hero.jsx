import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import PhoenixBird from "../components/PhoenixBird";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <div className="mx-auto h-dvh" id="hero">
      <ParallaxBackground />
      <HeroText />
      <div className="absolute md:right-5 md:top-10 w-[500px] h-[400px]">
        <Canvas
          camera={{ position: [-450, 0, 60], fov: 45 }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <Center>
            <group position={[0, -5, 0]}>
              <PhoenixBird scale={0.5} />
            </group>
          </Center>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
