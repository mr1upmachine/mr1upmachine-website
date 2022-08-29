import { ReactNode } from "react";
import { Particles as TSParticles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";

interface ParticlesProps {
  children?: ReactNode;
}

export function Particles({ children }: ParticlesProps) {
  const particlesInit = async (main: Engine) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  return (
    <TSParticles
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "snow",
      }}
    ></TSParticles>
  );
}
