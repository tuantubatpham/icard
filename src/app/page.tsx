import Antigravity from "@/components/Antigravity";
import JasmineStyleHero from "@/components/JasmineStyleHero";
import Lanyard from "@/components/Lanyard";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-transparent font-sans dark:bg-transparent">
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Antigravity
          count={300}
          magnetRadius={9}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#e17fcc"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="absolute inset-0 z-20">
        <JasmineStyleHero />
      </div>

      <div className="absolute inset-y-0 right-0 z-30 pointer-events-none w-[34vw] min-w-[320px]">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </main>
  );
}
