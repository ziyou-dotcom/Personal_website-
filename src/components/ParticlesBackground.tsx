import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackgroundProps {
  color?: string;
  linkColor?: string;
  particleCount?: number;
}

const ParticlesBackground = ({ 
  color = "#00ffff", 
  linkColor = "#00ffff",
  particleCount = 150 
}: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <Particles
      id={`tsparticles-${Math.random()}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: color,
          },
          links: {
            color: linkColor,
            distance: 200,
            enable: true,
            opacity: 0.15,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05
            }
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1.5,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: particleCount,
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          shape: {
            type: ["circle", "triangle", "star"],
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1
            }
          }
        },
        detectRetina: true,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 400,
              links: {
                opacity: 0.5
              }
            }
          },
        },
      }}
    />
  );
};

export default ParticlesBackground; 